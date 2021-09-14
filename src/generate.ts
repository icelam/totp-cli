import fs from 'fs';
import chalk from 'chalk';
import { writeSync as copy } from 'clipboardy';
import {
  validateOtpauthUri, parseOtpauthUri, generateTotp, printOutput, getJsonFromFile,
} from './utils';
import { CONFIG_PATH } from './constants';

const generate = (configKey: string): void => {
  if (!fs.existsSync(CONFIG_PATH)) {
    printOutput({
      type: 'error',
      title: 'No config file found!',
      content: 'Please generate your config file using "set" command.',
      remarks: 'Run "totp set --name <name> --uri <otpauth_uri>" \nto create configuration file.',
    });
    process.exit(1);
  }

  // Generate TOTP
  const config = getJsonFromFile(CONFIG_PATH);

  if (!config[configKey]) {
    printOutput({
      type: 'error',
      title: 'Could not load configuration.',
      content: `Configuration for "${configKey}" does not exist in ${CONFIG_PATH}`,
      remarks: `Run "totp set --name ${configKey} --uri <otpauth_uri>" \nto create a new configuration set, or "totp list" to \nlist available config.`,
    });
    process.exit(1);
  }

  const otpauthUri = decodeURIComponent(config[configKey]);

  // Terminate program if type or secret is incorrect
  const validationResult = validateOtpauthUri(otpauthUri);
  if (!validationResult.valid) {
    const { error } = validationResult;
    printOutput({
      type: 'error',
      title: 'Failed to generate TOTP.',
      content: `${chalk.bold('Reason:')}    ${error}`,
      remarks: 'Please check whether the URL provided is a valid TOTP URL.',
    });
    process.exit(1);
  }

  // Generate TOTP code
  const { name, secret, issuer } = parseOtpauthUri(otpauthUri);
  const totpCode = generateTotp(secret as string);
  copy(totpCode.toString());

  // Print result
  let outputContent = '';
  if (name) {
    outputContent += chalk.white(`${chalk.bold('- Name:')}       ${name}`);
    outputContent += '\n';
  }

  if (issuer) {
    outputContent += chalk.white(`${chalk.bold('- Service:')}    ${issuer}`);
    outputContent += '\n';
  }

  outputContent += chalk.white(`${chalk.bold('- TOTP:')}       ${totpCode}`);

  printOutput({
    type: 'success',
    title: 'Your TOTP ready to use for next 30s.',
    content: outputContent,
    remarks: 'Copied TOTP code to clipboard!',
  });
};

export default generate;
