const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

/*
========================================================
ress ^C at any time to quit.
package name: (myproject) example-cross-js
========================================================
*/