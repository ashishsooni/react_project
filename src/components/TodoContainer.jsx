import React from "react";
import Todos from "./Todos";

function TodoContainer(props) {
  function deleteItem(id) {
    console.log("deleted");
    props.updatingList((preValue) => {
      return preValue.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="Container">
      {props.searchInList.map((itemValue, index) => {
        return (
          <Todos
            text={itemValue}
            onSelect={deleteItem}
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
}

export default TodoContainer;
