import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <p>0</p>
        <div className="calc-buttons">
          <button className="calc-button is-clear">C</button>
          <button className="calc-button">&divide;</button>
          <button className="calc-button">7</button>
          <button className="calc-button">8</button>
          <button className="calc-button">9</button>
          <button className="calc-button">&times;</button>
          <button className="calc-button">4</button>
          <button className="calc-button">5</button>
          <button className="calc-button">6</button>
          <button className="calc-button">&minus;</button>
          <button className="calc-button">1</button>
          <button className="calc-button">2</button>
          <button className="calc-button">3</button>
          <button className="calc-button">+</button>
          <button className="calc-button is-zero">0</button>
          <button className="calc-button is-equals">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
