# create-serverless-funciton

Generates the boilerplate code for a serverless function (AWS Lambda, Google Cloud Functions, Azure Function) with ES6 transpiling, generating a simpler `package.json` and other goodies.

THIS PROJECT IS VERY EARLY IN THE DEVELOPMENT. It definitely won't blow up any servers, but I'll be happy to hear feedback! Currently, I have only tested the generated functions on Google Cloud Functions.

## Getting Started

### Installing

```
npm i -g create-serverless-function
```

###  Running

```
create-serverless-function yourFunctionName ./your-function-name
```

### Deployment

```
yarn build
```

or

```
npm run build
```

`dist` folder will contain everything you need to deploy your function.

## Contributing

There is no set up process yet for the contribution process, please feel free to open pull requests.

## Authors

Mateusz Haligowski <mhaligowski@gmail.com>

## License

This project is licensed under MIT license - see [LICENSE.md](LICENSE.md) file foe details.


