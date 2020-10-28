"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ContactForm = require("./ContactForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
  return /*#__PURE__*/_react.default.createElement(_ContactForm.StyledForm, props);
};

var _default = Form;
exports.default = _default;