import React, { useState }from 'react';
import './App.scss';
import animalData from "./animalData";
import Campers from "./components/Campers";
import CampersForm from "./components/CampersForm";
// import Background from "./components/backgroundimage.png";

// var sectionStyle = {
//   backgroundImage: "url(" + Background + ")",
//   backgroundPosition: 'center',
//   backgroundSize: 'fit',
//   backgroundRepeat: 'no-repeat'
// };

function App() {
  const [campers, setCampers] = useState(animalData)
  const addNewAnimal = info => {
    setCampers([...campers, info])
  }

  return (
    <div className="App">
      <h1 className="campersClass" >My Campers</h1>
      <CampersForm addNewAnimal={addNewAnimal}/>
      <Campers camperList={campers}/>
    </div>
  );
}

export default App;
