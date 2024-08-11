"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

//import { configureStore } from '@reduxjs/toolkit';
// import { faqsSlice } from './slices/faqsSlice';
var rootReducers = (0, _redux.combineReducers)({//[faqsSlice.name]: faqsSlice.reducer,
});
var _default = rootReducers;
exports["default"] = _default;