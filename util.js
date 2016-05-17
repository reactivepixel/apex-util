const bcrypt = require('bcrypt');

/**
 * @function debug
 * @param {string} title
 * Title to display on the debug output
 * @param {object} obj
 * Object will be displayed in the debug output
 * @example
 * .debug('The title of what is being tested', objectToBeTested);
 */
exports.debug = (title, obj) => {
  if (process.env.DEBUG) {
    console.log('\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n',
      title,
      '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n',
      obj,
      '\n===========================================\n\n');
  }
};

/**
 * @function hash
 * @param {string} str
 * The string to hash
 * @param {function} callback
 * Callback Function to handle the output.
 * @example
 * .hash('MySecretPassword', (err, result) => {
 *   util.debug('Password Unhash Attempt', {dispName: cryptedData.dispName, result: result});
 * });
 */
exports.hash = (str, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(str, salt, callback);
  });
  return true;
};

/**
 * @function unhash
 * @param {string} pwdStr
 * The string of the user's password to unhash
 * @param {string} targetHash
 * The hash to be unhashed
 * @param {function} callback
 * Callback Function.
 * @example
 * .unhash('unhashed', cryptedData.hash, (err, result) => {
 *   util.debug('Password Unhash Attempt', {dispName: cryptedData.dispName, result: result});
 * });
 */
exports.unhash = (pwdStr, targetHash, callback) => {
  bcrypt.compare(pwdStr, targetHash, callback);
  return true;
};


/**
 * @function scrubData
 * @param {object} dirtyData
 * An object to be sanatized
 * @param {function} callback
 * Callback Function.
 * @example
 * .scrubData({ userInput: 'Never Trust Me, Always Sanatize me' });
 */
exports.scrubData = (dirtyData) => {
  const cleanData = Object.assign(dirtyData, {
    cleaned: true,
  });
  return cleanData;
};


/**
 * @function ifExists
 * @param thing
 * Any thing.
 * @param {function} callback
 * If the thing is not undefined callback
 * @example
 * .ifExists({ dbResponse: true });
 */
exports.ifExists = (thing, callback) => {
  if (typeof thing !== 'undefined') {
    return callback();
  }
  return false;
};
