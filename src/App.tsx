import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getFPTime } from './utils';

function App() {
  setTimeout(() => {
    // 获取首次绘制时间
    const FPTime = getFPTime();
    console.log('FPTime: ', FPTime);
  }, 2000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
