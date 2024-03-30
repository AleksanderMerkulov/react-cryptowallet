import logo from './logo.svg';
import './App.css';
import {getCoinsInfo} from "./data";
import {useEffect, useState} from "react";

function App() {
    let [data, setData] = useState([])

    useEffect(()=>{
        getCoinsInfo()
            .then(result=>{
                setData(result.result)
            })
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div>
          {
              data.map((value, index)=>{
                  return <div key={index}>{value.id}</div>
              })
          }
      </div>
    </div>
  );
}

export default App;
