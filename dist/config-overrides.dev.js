"use strict";

var _require = require("customize-cra"),
    override = _require.override,
    addLessLoader = _require.addLessLoader;

module.exports = {
  webpack: override(addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}
  }))
};