#!/usr/bin/env node
import minimist from 'minimist';
import * as totpCommands from './commands';

const argv = minimist(process.argv.slice(2));

const command = argv._[0];

if (command === 'set') {
  const { name, uri } = argv;
  totpCommands.set(name, uri);
  process.exit(0);
} else if (command === 'list') {
  totpCommands.list();
  process.exit(0);
} else if (argv._.length === 1) {
  totpCommands.generate(command);
  process.exit(0);
} else {
  totpCommands.help();
  process.exit(0);
}
