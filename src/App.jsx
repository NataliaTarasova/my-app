import React from "react";
import Flr from './Flr.png';
import flu from './flu.jpg';


function App(){
  return(
    <div>
    <h1>Мои данные из родного города:</h1>
    <p>Россия</p>
    <p>Ижевск</p>
    <p>Численность на 01.01.2021 составило 646 468 чел.</p>
    <img src={Flr} alt="Флаг России" width="100px" />
    <img src ={flu}  alt="Флаг Удмуртии" width="100px"/>
    </div>
  )
}

export default App;