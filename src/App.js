import React, { useState }from 'react';
import './App.css';
import animalData from "./animalData";
import Campers from "./components/Campers";
import CampersForm from "./components/CampersForm";

function App() {
  const [campers, setCampers] = useState(animalData)
  const addNewAnimal = info => {
    setCampers([...campers, info])
  }

  return (
    <div className="App">
      <h1>My Campers</h1>
      <CampersForm addNewAnimal={addNewAnimal}/>
      <Campers camperList={campers}/>
    </div>
  );
}

export default App;
