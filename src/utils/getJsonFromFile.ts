import fs from 'fs';

const getJsonFromFile = (path: string): Record<string, any> => {
  const rawConfig = fs.readFileSync(path).toString();
  try {
    return JSON.parse(rawConfig);
  } catch (e) {
    return {};
  }
};

export default getJsonFromFile;
