"use strict";

var _require = require('react-app-rewire-alias'),
    alias = _require.alias,
    aliasJest = _require.aliasJest,
    configPaths = _require.configPaths;

var aliasMap = configPaths('./jsconfig.paths.json'); // or jsconfig.paths.json

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);