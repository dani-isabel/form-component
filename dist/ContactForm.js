"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledForm = exports.ContactForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .input {\n    height: 4vh;\n    border-radius: 6px;\n    border: none;\n  }\n  .button {\n    font-weight: 600;\n    color: purple;\n    border-radius: 6px;\n    border: none;\n    height: 4vh;\n    background-color: #EAA4A4;\n  }\n  .text {\n    font-family: Calibri;\n    font-size: 32px;\n    color:white;\n  }\n  .dark {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 30vh;\n    background-color: purple; \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContactForm = function ContactForm(props) {
  var text = props.text,
      className = props.className,
      classInput = props.classInput,
      classText = props.classText;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: classText
  }, text), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    className: classInput,
    placeholder: "Email"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "button"
  }, "Button"))));
};

exports.ContactForm = ContactForm;
var StyledForm = (0, _styledComponents.default)(ContactForm)(_templateObject());
exports.StyledForm = StyledForm;