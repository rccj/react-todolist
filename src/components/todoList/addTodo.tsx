import React, { useState } from "react";
import { Input, Button } from "antd";


const AddTodo = (props: any) => {

  const [todo, setTodo] = useState('');

  return (
    <>
      <Input onChange={(e) => setTodo(e.target.value)} />
      <Button onClick={() => props.addTodo(todo)}>Add</Button>
    </>
  );
};

export default AddTodo;