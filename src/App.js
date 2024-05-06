import logo from './logo.svg';
import './App.css';
import {getCoinsInfo} from "./data";
import {useEffect, useState} from "react";
import AppHeader from "./components/AppHeader";

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
      <AppHeader />
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
