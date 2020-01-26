import React, {useState} from "react";
import "./formStyling.scss";

const CampersForm = props => {
    // const [name, setName] = useState("");
    // const [theme, setTheme] = useState("");
    // const [about, setAbout] = useState("");
    const [info, setInfo] = useState ("");

    const submitForm = event => {
        event.preventDefault();
        
        const newAnimal = {
        ...info,
        id: Date.now()
    };
    props.addNewAnimal(newAnimal);
    }
    
    
    
    return (
        <form className="formContainer" onSubmit={submitForm}>
            <label  className="labelClass" htmlFor="Name">Camper Name:</label>
            <input 
                className="inputStyle"
                type="text"
                name="Name"    
                value={info.name} 
                onChange={(event) => {
                    setInfo({...info, name : event.target.value});
            }} />
        

            <label className="labelClass" htmlFor="Theme">Camper Theme:</label>
            <input 
                className="inputStyle"
                type="text" 
                name="Theme" 
                value={info.theme} 
                onChange={(event) => {
                    setInfo({...info, theme : event.target.value});
                }} />
        
            <label className="labelTextArea" htmlFor="About">About The Camper:</label>
            <input 
                className="textAreaStyle"
                type="text" 
                name="About" 
                value={info.about} 
                onChange={(event) => {
                    setInfo({...info, about : event.target.value});
            }}/>

            <div>
                <button className="buttonClass" type="submit">Add to Camp List</button>
            </div>
        </form>
    )
}




export default CampersForm;