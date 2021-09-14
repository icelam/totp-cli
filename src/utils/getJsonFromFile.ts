import fs from 'fs';

/**
 * Get JSON object from file
 * @param path File path to get the content from
 * @returns JSON object of the spacified file
 */
const getJsonFromFile = (path: string): Record<string, any> => {
  const rawConfig = fs.readFileSync(path).toString();
  try {
    return JSON.parse(rawConfig);
  } catch (e) {
    return {};
  }
};

export default getJsonFromFile;
