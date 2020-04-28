import React from 'react';
import browser from 'browser-detect';
import NumberModule from './components/NumbersModule';
import './App.css';
const result = browser();

function App() {
  return (
    <div className="App">
        <NumberModule browserName={result.name} />
    </div>
  );
}

export default App;
