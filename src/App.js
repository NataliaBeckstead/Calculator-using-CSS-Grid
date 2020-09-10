import React, {useState} from 'react';
import './App.scss';
import * as math from 'mathjs';

function App() {

  const[result, setResult] = useState("");

  function handleClear () {
    setResult("");
  }

  function addInput(str) {
    setResult(result + str);
  }

  function handleEqual() {
    setResult(math.evaluate(result));
  }

  return (
    <div className="App">
      <div className="calculator">
        <p>{result}</p>
        <div className="calc-buttons">
          <button className="calc-button is-clear" onClick = {handleClear}>C</button>
          <button className="calc-button" onClick = {() => addInput("%")}>&divide;</button>
          <button className="calc-button" onClick = {() => addInput("7")}>7</button>
          <button className="calc-button" onClick = {() => addInput("8")}>8</button>
          <button className="calc-button" onClick = {() => addInput("9")}>9</button>
          <button className="calc-button" onClick = {() => addInput("*")}>&times;</button>
          <button className="calc-button" onClick = {() => addInput("4")}>4</button>
          <button className="calc-button" onClick = {() => addInput("5")}>5</button>
          <button className="calc-button" onClick = {() => addInput("6")}>6</button>
          <button className="calc-button" onClick = {() => addInput("-")}>&minus;</button>
          <button className="calc-button" onClick = {() => addInput("1")}>1</button>
          <button className="calc-button" onClick = {() => addInput("2")}>2</button>
          <button className="calc-button" onClick = {() => addInput("3")}>3</button>
          <button className="calc-button" onClick = {() => addInput("+")}>+</button>
          <button className="calc-button is-zero" onClick = {() => addInput("0")}>0</button>
          <button className="calc-button" onClick = {() => addInput(".")}>.</button>
          <button className="calc-button is-equals" onClick = {handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
