import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <div className="App">
      {/*
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
      */}
      <h1>테스트 에디터 작업</h1>
      <CodeEditor />
      <p>나중에 에디터는 useContext로 바꿀 생각 props 넘기는게 많아지면 번거롭기 때문</p>
    </div>
  );
}

export default App;
