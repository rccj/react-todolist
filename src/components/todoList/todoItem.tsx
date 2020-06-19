import React from "react";

const TodoItem = (props: any) => {
  return (
    <>
      <div>{props.item}<label onClick={()=>props.deleteItem(props.index)}>X</label></div>
    </>
  );
};

export default TodoItem;