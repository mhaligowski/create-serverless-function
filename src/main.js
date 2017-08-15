const chalk = require('chalk');

const path = require('path');
const fs = require('fs');

var targetDir;

const program = require('commander');

program.version('0.1.0')
       .arguments('<dir>')
       .action(dir => targetDir = dir)
       .option('-n, --name <name>', 'The name of the project')
       .parse(process.argv);

if (typeof targetDir === 'undefined') {
    console.error(chalk.red('Target directory is required'));
    process.exit(1);
}

console.log(chalk.yellow('Creating the src directory'));
const srcDir = path.resolve(targetDir, 'src');
fs.mkdirSync(srcDir);
console.log(chalk.green('src directory created'));

// generate index.js
const indexJsTemplate = require('./templates/index.js.hbs');

console.log(chalk.yellow('Generating index.js'));
console.log(indexJsTemplate({ name: program.name }));

