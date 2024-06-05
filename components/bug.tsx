"use state"
import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [param, setParam] = useState<number>(0);

  // Missing default clause in switch statement
  const checkParamMissingDefault = (param: number) => {
    switch (param) {
      case 0:
        console.log('Case 0');
        break;
      case 1:
        console.log('Case 1');
        break;
      // No default clause
    }
  };

  // Default clause not being the last one
  const checkParamDefaultNotLast = (param: number) => {
    switch (param) {
      default: // Default clause should be the last one
        console.log('Default case');
        break;
      case 0:
        console.log('Case 0');
        break;
      case 1:
        console.log('Case 1');
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vulnerable React App</h1>
        <div>
          <h2>Switch Statement Vulnerabilities</h2>
          <button onClick={() => checkParamMissingDefault(param)}>Check Param (Missing Default)</button>
          <button onClick={() => checkParamDefaultNotLast(param)}>Check Param (Incorrect Default)</button>
        </div>
      </header>
    </div>
  );
}

export default App;
