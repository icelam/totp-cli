import path from 'path';
import os from 'os';

export const HOME_DIRECTORY = os.homedir();
export const CONFIG_FILENAME = '.totprc';
export const CONFIG_PATH = path.resolve(HOME_DIRECTORY, CONFIG_FILENAME);
