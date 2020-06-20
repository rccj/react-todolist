"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var addTodo_1 = require("./addTodo");
var todoItem_1 = require("./todoItem");
var antd_1 = require("antd");
require("antd/dist/antd.css");
require("./index.less");
// import './dist/index.css'
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content;
var TodoList = function () {
    var _a = react_1.useState([1, 2, 3]), todos = _a[0], setTodos = _a[1];
    var addTodo = function (todo) {
        // const newArr = todos.slice();
        // newArr.push(todo);
        if (todo) {
            var newArr = __spreadArrays(todos, [todo]);
            localStorage.setItem('todos', JSON.stringify(newArr));
            setTodos(newArr);
        }
        else {
            return;
        }
        ;
    };
    var deleteItem = function (index) {
        var newArr = __spreadArrays(todos);
        newArr.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(newArr));
        setTodos(newArr);
    };
    var cleanAll = function () {
        localStorage.setItem('todos', '');
        setTodos([]);
    };
    // useEffect(() => {
    //   setTodos(JSON.parse(localStorage.getItem('todos') || '')||[]);
    // }, []);
    react_1.useEffect(function () {
        var todosString = localStorage.getItem('todos');
        setTodos(todosString ? JSON.parse(todosString) : []);
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Layout, { className: "container" },
            react_1["default"].createElement(Header, null,
                react_1["default"].createElement("h1", { className: "title" }, "To do List")),
            react_1["default"].createElement(Content, null,
                react_1["default"].createElement(addTodo_1["default"], { addTodo: addTodo, cleanAll: cleanAll }),
                todos.map(function (_item, _index) { return (react_1["default"].createElement(todoItem_1["default"], { key: _index, item: _item, index: _index, deleteItem: deleteItem })); })),
            react_1["default"].createElement(Footer, null))));
};
exports["default"] = TodoList;
