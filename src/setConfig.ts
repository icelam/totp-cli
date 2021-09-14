import fs from 'fs';
import chalk from 'chalk';
import { getJsonFromFile, printOutput } from './utils';
import { CONFIG_PATH } from './constants';
import printHelp from './printHelp';

const setConfig = (name: string, uri: string): void => {
  if (!name || typeof name !== 'string' || !uri || typeof uri !== 'string') {
    console.log(chalk.red('totp: invalid command'));
    printHelp();
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

export default setConfig;
