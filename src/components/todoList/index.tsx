import React, { useState, useEffect } from "react";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import "./index.less";
// import './dist/index.css'

const { Header, Footer, Sider, Content } = Layout;

const TodoList = () => {
  const [todos, setTodos] = useState([1, 2, 3]);

  const addTodo = (todo: any) => {
    // const newArr = todos.slice();
    // newArr.push(todo);
    const newArr = [...todos, todo];
    localStorage.setItem('todos', JSON.stringify(newArr));
    setTodos(newArr);
  };

  const deleteItem = (index: any) => {
    const newArr = [...todos];
    newArr.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(newArr));
    setTodos(newArr);
  }

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem('todos') || '')||[]);
  // }, []);

  useEffect(() => {
    const todosString: string | null = localStorage.getItem('todos');
    setTodos(todosString ? JSON.parse(todosString) : []);
  }, []);


  return (
    <>
      <Layout className="container">
        <Header >
          <h1 className="headerr">To do List</h1>
        </Header>
        <Content>
          <AddTodo
            addTodo={addTodo}
          />
          {todos.map((_item: any, _index: any) => (
            <TodoItem
              key={_index}
              item={_item}
              index={_index}
              deleteItem={deleteItem}
            />
          ))}
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};
export default TodoList;