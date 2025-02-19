import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/song/todo/pages";

function App() {
  // const colorArray: string[] = ["pink", "red", "purple"];
  // const isTrue: boolean = true;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        {isTrue ? <p>hehehe</p> : <p>hihihi</p>}
        {isTrue && <p>test2</p>}
        {isTrue ? <ul> {colorArray.map(color => (
         <li key = {color} style={{color}}> ní hảo màu {color}</li>
        ))}</ul> : 'ní hảo'} */}
      </header>
      <TodoFeature />
      {/* <albumList/> */}
    </div>
  );
}

export default App;
