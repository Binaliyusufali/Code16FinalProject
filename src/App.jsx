import { useState } from "react";
import "./App.css";
import Db from "./db.json";
import r1 from "./assets/r1.png"

function App() {
  const [searcStation, setSearchStation] = useState("");

  return (
    <div className="container">
      <h1>Bursa Büyükşehir Belediyesi</h1>
      <h2>Bisiklet Tamir İstasyonları</h2>

      <div className="InputContainer">
        <input
          className="search"
          type="text"
          placeholder="Bulunduğunuz bölgeyi giriniz."
          
          onChange={(e) => setSearchStation(e.target.value)}
        />
      </div>
      <div className="dataContainer">
        {
          Db.filter((val)=> {
            if(searcStation ==""){
              return val;
            }else if(
              val.title.toLocaleLowerCase().includes(searcStation.toLocaleLowerCase())){
                return val;
              }
            
          }).map((val)=>{
            return(
              <div className="data" key={val.id}>
                <img src={r1}  />
                <h3>{val.title}</h3>
                <p>{val.Description}</p>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
