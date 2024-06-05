"use client"
import React, { useState } from 'react';

const Vulnerable: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Insecure way of handling user input, vulnerable to XSS
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Insecure function usage, eval should be avoided
  const handleClick = () => {
    eval(input);
  };

  // Simulate an SQL injection vulnerability (for educational purposes)
  const handleLogin = () => {
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    console.log("Executing query: ", query);
    // Imagine this query being executed on a backend without proper sanitization
  };

  // Insecure usage of localStorage
  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vulnerable React App</h1>
        <div>
          <h2>XSS Vulnerability</h2>
          <input type="text" value={input} onChange={handleChange} />
          <button onClick={handleClick}>Execute</button>
        </div>
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <div>
            <input type="checkbox" onChange={handleRememberMe} />
            <label>Remember me</label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Vulnerable;
