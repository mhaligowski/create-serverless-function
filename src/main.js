const chalk = require('chalk');
const commander = require('commander');

const path = require('path');
const fs = require('fs');

const target_dir = './test/target';

console.log(chalk.yellow('Creating the src directory'));
const src_dir = path.resolve(target_dir, 'src');
fs.mkdirSync(src_dir);
console.log(chalk.green('src directory created'));


// generate index.js
