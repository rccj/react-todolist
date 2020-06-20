"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var TodoItem = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            props.item,
            react_1["default"].createElement(antd_1.Button, { size: "small", onClick: function () { return props.deleteItem(props.index); } }, "X"))));
};
exports["default"] = TodoItem;
