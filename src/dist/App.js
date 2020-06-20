"use strict";
exports.__esModule = true;
var react_1 = require("react");
var todoList_1 = require("./components/todoList");
require("./App.less");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "todoList" },
            react_1["default"].createElement(todoList_1["default"], null))));
}
exports["default"] = App;
