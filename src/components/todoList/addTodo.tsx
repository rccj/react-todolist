import React, { useState } from "react";
import { Input, Button } from "antd";

const AddTodo = (props: any) => {
  const [todo, setTodo] = useState("");

  const addTodoFn = (todo: any) => {
    if (todo !== "") {
      props.addTodo(todo);
      setTodo("");
    } else {
      return;
    }
  };

  const handleEnter = (event: any, todo: any) => {
    if (event.key === "Enter") {
      addTodoFn(todo);
    }
  };

  return (
    <>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => handleEnter(e, todo)}
      />
      <Button onClick={() => addTodoFn(todo)}>Add</Button>
      <Button onClick={() => props.cleanAll()}>Clean</Button>
    </>
  );
};

export default AddTodo;
