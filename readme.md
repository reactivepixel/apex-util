# Apex Util

A base set of utilities for use in a variety of Apextion Projects.

## Installation

```
npm install apex-util --save
```

## Tool Usage

### .log
For when you need to write to the log.

``` javascript
// app.js
const util = require('apex-util');

util.log('Something needs to be saved to the log', { logMe: true });
```

### .debug
Require the package and use it to only display debug messages when you want your app to be in debug mode.

``` javascript
// app.js
const util = require('apex-util');

util.debug('The title of what is being tested', { objectToBeTested: true });
```
> The debugger will only console log if the Environmental Variable DEBUG set to true. For testing, run your node script with the following command:

> ``` shell
DEBUG=true node app.js
```
