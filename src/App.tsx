import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getFPTime } from './utils';

function App() {
  setTimeout(() => {
    // 获取首次绘制时间
    const FPTime = getFPTime();
    console.log('FPTime: ', FPTime);

    // navigation 展示
    console.log('navigation: ', window.performance.navigation);

    console.log(window.performance.now());

    // 关键性能指标
    const {
      domainLookupEnd,
      domainLookupStart,
      domLoading,
      navigationStart,
    } = window.performance.timing;
    console.log('DNS 查询耗时: ', domainLookupEnd - domainLookupStart);
    console.log('白屏时间: ', domLoading - navigationStart);
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
