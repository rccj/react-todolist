"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var AddTodo = function (props) {
    var _a = react_1.useState(""), todo = _a[0], setTodo = _a[1];
    var addTodoFn = function (todo) {
        if (todo !== "") {
            props.addTodo(todo);
            setTodo("");
        }
        else {
            return;
        }
    };
    var handleEnter = function (event, todo) {
        if (event.key === "Enter") {
            addTodoFn(todo);
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Input, { value: todo, onChange: function (e) { return setTodo(e.target.value); }, onKeyDown: function (e) { return handleEnter(e, todo); } }),
        react_1["default"].createElement(antd_1.Button, { onClick: function () { return addTodoFn(todo); } }, "Add"),
        react_1["default"].createElement(antd_1.Button, { onClick: function () { return props.cleanAll(); } }, "Clean")));
};
exports["default"] = AddTodo;
