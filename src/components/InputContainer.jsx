import React from "react";

function InputContainer(props) {
  return (
    <div className="Input_container">
      <input
        type="text"
        placeholder="Enter Your Tasks"
        value={props.toWrite}
        onChange={props.doIt}
      />
      <button onClick={props.clicked}>+</button>
    </div>
  );
}

export default InputContainer;
