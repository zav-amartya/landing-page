"use client"

import React, { useState } from 'react';
import './App.css';

function Bug() {
  const [input, setInput] = useState('');

  // Insecure way of handling user input, vulnerable to XSS
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(e.target.value);
  };

  // Insecure function usage, eval should be avoided
  const handleClick = () => {
    eval(input);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vulnerable React App</h1>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleClick}>Execute</button>
      </header>
    </div>
  );
}

export default Bug;
