const chalk = require('chalk');

const path = require('path');
const fs = require('fs');

const program = require('commander');

program.version('0.1.0')
    .arguments('<name> <directory>')
    .parse(process.argv);

if (program.args.length != 2) program.help();

function generateIndexJs(functionName, targetDir) {
    console.log(chalk.yellow('Generating index.js'));

    fs.mkdirSync(path.resolve(targetDir, 'src'));

    const indexJsTemplate = require('./templates/index.js.hbs');
    const indexJsPath = path.resolve(targetDir, 'src', 'index.js');
    const indexJsBody = indexJsTemplate({ name: functionName });

    fs.writeFileSync(indexJsPath, indexJsBody);

    console.log(chalk.green('Generated index.js'));
}

function generatePackageJson(functionName, targetDir) {
    console.log(chalk.yellow('Generating package.json'));

    const packageJson = {
        "name": functionName,
        "version": "0.0.1",
        "main": 'index.js',
        "devDependencies": {
            "babel-core": "^6.25.0",
            "babel-jest": "^20.0.3",
            "babel-loader": "^7.1.1",
            "babel-preset-env": "^1.6.0",
            "generate-package-json-webpack-plugin": "^0.1.2",
            "jest": "^20.0.4",
            "regenerator-runtime": "^0.10.5",
            "webpack": "^3.3.0",
            "webpack-node-externals": "^1.6.0"
        },
        "scripts": {
            "test": "jest",
            "build": "webpack --config ./config/webpack.config.js"
        },
        "jest": {
            "testEnvironment": "node"
        }
    };

    const packageJsonPath = path.resolve(targetDir, 'package.json');
    const packageJsonBody = JSON.stringify(packageJson, null, '    ');
    
    fs.writeFileSync(packageJsonPath, packageJsonBody);

    console.log(chalk.green('Generated package.json'));
}

function generateWebpackConfig(functionName, targetDir) {
    console.log(chalk.yellow('Generating WebPack configuration'));

    fs.mkdirSync(path.resolve(targetDir, 'config'));

    const webpackConfigTemplate = require('./templates/webpack.config.js.hbs');
    const webpackConfigPath = path.resolve(targetDir, 'config', 'webpack.config.js');
    const webpackConfigBody = webpackConfigTemplate({ name: functionName });

    fs.writeFileSync(webpackConfigPath, webpackConfigBody);

    console.log(chalk.green('Generated webpack configuration'));
}

generateIndexJs(...program.args);
generatePackageJson(...program.args);
generateWebpackConfig(...program.args);


