import React from "react";

function Todos(props) {
  
  return (
    <div className="todo">
      <p>{props.text}</p>

      <div className="actions">
        <input type="checkbox"/>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todos;
