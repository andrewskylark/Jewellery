'use strict';

const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: [
    `./source/js/no-js.js`,
    `./source/js/consts.js`,
    `./source/js/utils.js`,
    `./source/js/menu.js`,
    `./source/js/accordion.js`
  ],
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `./build/js`),
    // iife: true
  },
  devtool: false
};
