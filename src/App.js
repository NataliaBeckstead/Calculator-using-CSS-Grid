import React, {useState} from 'react';
import './App.scss';
import * as math from 'mathjs';

function App() {

  const[result, setResult] = useState("");

  let specials = {
    ".": 0,
    "/": 0,
    "+": 0,
    "*": 0,
    "-": 0
  }

  function handleClear () {
    setResult("");
  }
  
  function addInput(symbol) {
    if (symbol === "." && result.length > 1){
      for (var i = result.length - 1; i > 0; i--) {
        if (result[i] === ".") {
          return false;
        } else if (result[i] in specials) {
          setResult(result + symbol);
        }
      }
    }
    if (symbol in specials && result[result.length - 1] in specials) {
      let newRes = result.substr(0, result.length - 1);
      setResult(newRes + symbol);
    } else {
      setResult(result + symbol);
    }
  }

  function handleEqual() {
    if (result !== "") {
      if (result[result.length - 1] in specials) {
        setResult(math.evaluate(result.substr(0, result.length - 1)));
      } else {
        setResult(math.evaluate(result));
      }
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <p>{result}</p>
        <div className="calc-buttons">
          <button className="calc-button is-clear" onClick = {handleClear}>C</button>
          <button className="calc-button" onClick = {() => addInput("/")}>&divide;</button>
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
