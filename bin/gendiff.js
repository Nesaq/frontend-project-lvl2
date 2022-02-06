#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
//   .option('-h, --help, display help for command')
//   .option('-V, --version, output the version number')
  .option('-f, --format <type>', 'output format');
program.parse();
