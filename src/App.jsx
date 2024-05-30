import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoContainer from "./components/TodoContainer";
import Todos from "./components/Todos";
import InputContainer from "./components/InputContainer";

function App() {
  const [text, setText] = useState("");
  const [listItem, SetListItem] = useState([]);
  function adding(event) {
    setText(event.target.value);
  }
  function updateList() {
    if (text != "") {
      SetListItem((preValue) => [...preValue, text]);
      setText("");
    }
  }

  

  return (
    <>
      <Heading />
      <InputContainer toWrite={text} doIt={adding} clicked={updateList} />
      <TodoContainer searchInList={listItem} updatingList={SetListItem} />
    </>
  );
}

export default App;
