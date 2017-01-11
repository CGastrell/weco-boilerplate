# weco-boilerplate

Simple template with `webpack` for `cordova` app.

Tested with versions:

  - NodeJS 6.9.2
  - Webpack 1.14
  - Cordova 6.4.0

## Pre-requisites
You have to make you're own way to have a stable and functional `cordova` installation. Including any SDK and environment settings they may require.


## Features
  - A simple (yet not so simple) webpack config both for dev and prod
  - [Standard][1] linting enforced, if it isn't clean, it won't compile [you can disable it][2]
  - Entry point outside the deployment directory (`./src`)
  - Most popular loaders for your convenience
  - Babel loader for all your `.js` files

[1]: https://github.com/feross/standard
[2]: #disable-standard-enforced-linting

## Usage
**Note before you start** DON'T USE spaces or funny characters on your app `name` (third optional arg). For some reason, `npm` checks on the package
name before any attempt to run scripts and, WEIRDLY, won't run if you use a space or some rare characters (not tested).

To fix this (in case you want spaces or other chars on the name), go ahead and create it, then, BEFORE running any `npm` scripts, change
the `name` property on the `package.json` file (it won't affect your app in any way)

### Create
```bash
cordova create dir [id] [name] --template=https://github.com/cgastrell/weco-boilerplate
```
This will create a directory `dir` and create a new `cordova` basic app, but using the source from this repo. For example:
```bash
cordova create basicapp com.myapps.mybasicapp "BasicApp" --template=https://github.com/cgastrell/weco-boilerplate
```
Then you should have a directory `basicapp` which looks like this:
```
├── config.xml
├── hooks
├── package.json
├── platforms
├── plugins
├── src
├── webpack.common.config.js
├── webpack.config.js
├── webpack.dev.config.js
└── www
```

Enter the directory just created and run `npm install` to install all the needed dependencies

### Developing
```bash
npm run dev
```
This will run a webpack-dev-server and your project can be seen on http://localhost:8080

### Building
```bash
npm run build
```

### Cordova
Add android platform:
```bash
cordova platform add android
```
To test your app you can use the emulator (if you built one):
```bash
cordova emulate android
```
Or build a debug version and install it on any android
```bash
cordova build android
```
Or run it on a connected device:
```bash
cordova run android
```

### Basic testing
You wanna know if it's working on a one liner? As soon as you created the project you can run:
```bash
npm install && npm run build && cordova platform add android && cordova emulate android
```

### Disable standard enforced linting
If you don't like linting or standard, disable it changing the checker script on the `package.json` file:
```json
   "lint": "./node_modules/standard/bin/cmd.js 'src/**/*.js'"
```
to this
```json
   "lint": "echo 0"
```

