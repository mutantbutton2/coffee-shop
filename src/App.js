import React from 'react';
import './App.css';
import Login from './auth/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <code>Coffee shop</code>
        </h2>
        <p><code>OPENING SOON</code></p>
      <Login />
      </header>
    </div>
  );
}

export default App;


