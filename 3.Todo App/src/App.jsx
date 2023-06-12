import React from "react";
import { useState } from "react";
import TaskAdder from "./TaskAdder";

const App = () => {
  const [inputList, setInputList] = useState();
  const [item, setItem] = useState([]);
  const itemEvent = (event) => {
    event.preventDefault();
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    // took the usestate value and added inpustlist value,
    // now new values will be added with the previous one
    setItem((props) => {
      return [...props, inputList]; /**used spread operator */
    });
    setInputList("");
  };
  const deleteItem = (id) =>{
    setItem((props) =>{
        // arrEle isn't used so why did he passed it??
        return props.filter((arrEle, index) =>{
            return id !== index;
        })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo App</h1>
          <br />
          <input
            type="text"
            placeholder="Enter Task"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <br />
          <ol>
            {item.map((itemvalue , index) => {
              return (
                <>
                <TaskAdder 
                id = {index}
                key = {index}
                text={itemvalue}
                // understand how this function works??
                onSelect = {deleteItem}
                />
             </>
                );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
