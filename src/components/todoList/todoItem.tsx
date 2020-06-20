import React from "react";
import { Button } from "antd";

const TodoItem = (props: any) => {
  return (
    <>
      <div>{props.item}
        <Button size={"small"} onClick={() => props.deleteItem(props.index)}>X</Button>
      </div>
    </>
  );
};

export default TodoItem;