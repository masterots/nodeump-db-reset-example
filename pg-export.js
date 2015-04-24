#!/usr/bin/env node
var chalk = require('chalk');
var Nodeump = require("Nodeump");
var nodeump = new Nodeump({
  host: 'localhost',
  database: 'nodeump',
  username: 'nodeump',
  password: 'nodeump',
  dataplan: ['test_table']
});

nodeump.exportData()
  .catch(function(error) {
    console.log(chalk.bold.red(error));
  })
  .done(function(results) {
    console.log(chalk.bold.green('Export complete'));
    process.exit(0);
  });
