# weco-boilerplate

Simple template with `webpack` for `cordova` app.

Tested with versions:

  - NodeJS 6.9.2
  - Webpack 1.14
  - Cordova 6.4.0

## Pre-requisites
You have to make you're own way to have a stable and functional `cordova` installation. Including any SDK and environment settings they may require.

## Usage
**Note before you start** DON'T USE spaces or funny characters on your app `name` (third optional arg). For some reason, `npm` checks on the package
name before any attempt to run scripts and, WEIRDLY, won't run if you use a space or some rare characters (not tested).

To fix this (in case you want spaces or other chars on the name), go ahead and create it, then, BEFORE running any `npm` scripts, change
the `name` property on the `package.json` file (won't affect your app in any way)

### Create
```bash
cordova create dir [id] [name] --template=https://github.com/cgastrell/weco-boilerplate
```
This will create a directory `dir` and create a new `cordova` basic app, but using the source from this repo. For example:
```bash
cordova create basicapp com.myapps.mybasicapp "BasicApp" --template=https://github.com/cgastrell/weco-boilerplate
```
Then you should have a directory `basicapp` which looks like this:
