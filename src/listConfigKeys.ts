import fs from 'fs';
import { getJsonFromFile, printOutput } from './utils';
import { CONFIG_PATH } from './constants';

const listConfigKeys = (): void => {
  const LIST_PREFIX = '- ';

  const config = fs.existsSync(CONFIG_PATH)
    ? getJsonFromFile(CONFIG_PATH)
    : {};

  const configKeys = Object.keys(config);
  const hasConfigKeys = configKeys.length > 1;

  printOutput({
    type: 'success',
    title: hasConfigKeys ? 'List of available configuration set:' : 'No available configuration set.',
    content: hasConfigKeys
      ? `${LIST_PREFIX}${configKeys.join(`\n${LIST_PREFIX}`)}`
      : 'Configuration file is empty.',
    remarks: hasConfigKeys ? '' : 'Run "totp set --name <name> --uri <otpauth_uri>"\nto create a new configuration set.',
  });
};

export default listConfigKeys;
