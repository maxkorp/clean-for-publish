#!/usr/bin/env node
const yargs = require('yargs');

const main = require('./main');

const argv = yargs
  .usage('clean-for-publish --location [module folder] --extension [which extension to preserve]')
  .help('h')
  .alias('h', 'help')
  .describe('l', 'The location of the module to clean')
  .alias('l', 'location')
  .default('l', process.cwd())
  .describe('e', 'The extensions to preserve')
  .alias('e', 'extension')
  .array('e')
  .default('e', ['.node', '.pdb'])
  .epilog('Copyright 2015')
  .argv;

main(argv.l, argv.e);
