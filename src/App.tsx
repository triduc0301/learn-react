import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const colorArray:string[] = ['pink','red','yellow','purple'];
  const isTrue:boolean = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isTrue ? <p> {colorArray.map(color => (
            <p style={{color}}> ní hảo màu {color}</p>
          ))}</p> : 'ní hảo'}
        </p>
      </header>
    </div>
  );
}

export default App;
