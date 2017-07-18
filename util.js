// tool.js

// .debug is the method exported
exports.log = (title, output, level) => {
  const defaultDebugLevel = 2;

  // If the DEBUG_MODE env is set.
  // If not set when we parseInt() unexpected results
  // would occur.
  const debugDetailLevel = process.env.DEBUG_MODE || defaultDebugLevel;
  const eventThresholdRequirement = level || defaultDebugLevel;

  // Is the DEBUG_MODE threshold hit?
  // Environmental Variables come in as strings
  // so if you want to eval them as an int
  // you need to parseInt()
  if (parseInt(debugDetailLevel, 10) >= eventThresholdRequirement) {
    // Combine the title and output together in a .log
    console.log(title, output);
  }
};
