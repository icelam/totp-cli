import fs from 'fs';
import chalk from 'chalk';
import { getJsonFromFile, printOutput } from '../utils';
import { CONFIG_PATH } from '../constants';
import help from './help';

/**
 * Save provided <otpauth_uri> into config under configuration set named <config_name>
 * @param name Configuration set name
 * @param uri Otpauth uri
 */
const set = (name: string, uri: string): void => {
  if (!name || typeof name !== 'string' || !uri || typeof uri !== 'string') {
    console.log(chalk.red('totp: invalid command'));
    help();
    process.exit(1);
  }

  const currentConfig = fs.existsSync(CONFIG_PATH)
    ? getJsonFromFile(CONFIG_PATH)
    : {};

  // Set / override existing config
  currentConfig[name] = uri;

  fs.writeFileSync(CONFIG_PATH, JSON.stringify(currentConfig));

  printOutput({
    type: 'success',
    title: 'Operation success',
    content: `Configuration file is generated to ${CONFIG_PATH}`,
  });
};

export default set;
