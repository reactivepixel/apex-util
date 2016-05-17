# Apex Util

A base set of utilities for use in a variety of Apextion Projects.

## Installation

```
npm install apex-util --save
```

## Usage
Require the package and use it to only display debug messages when you want your app to be in debug mode.

``` javascript
// app.js
const util = require('apex-util');

util.debug('The title of what is being tested', { objectToBeTested: true });
```

The debugger will only console log if the Environmental Variable DEBUG set to true. For testing, run your node script with the following command:

 ``` shell
DEBUG=true node app.js
```
