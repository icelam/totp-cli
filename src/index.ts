#!/usr/bin/env node
import minimist from 'minimist';
import setConfig from './setConfig';
import generate from './generate';
import printHelp from './printHelp';
import listConfigKeys from './listConfigKeys';

const argv = minimist(process.argv.slice(2));

const command = argv._[0];

if (command === 'set') {
  const { name, uri } = argv;
  setConfig(name, uri);
  process.exit(0);
} else if (command === 'list') {
  listConfigKeys();
  process.exit(0);
} else if (argv._.length === 1) {
  generate(command);
  process.exit(0);
} else {
  printHelp();
  process.exit(0);
}
