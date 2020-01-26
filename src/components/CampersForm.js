import React, {useState} from "react";

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
        <form onSubmit={submitForm}>
            <label htmlFor="Name">Camper Name</label>
            <input 
                type="text"
                name="Name"    
                value={info.name} 
                onChange={(event) => {
                    setInfo({...info, name : event.target.value});
            }} />
        

            <label htmlFor="Theme">Camper Theme</label>
            <input 
                type="text" 
                name="Theme" 
                value={info.theme} 
                onChange={(event) => {
                    setInfo({...info, theme : event.target.value});
                }} />
        
            <label htmlFor="About">About The Camper</label>
            <textarea 
                type="text" 
                name="About" 
                value={info.about} 
                onChange={(event) => {
                    setInfo({...info, about : event.target.value});
            }}/>

            <button type="submit">Add to Camp List</button>
        </form>
    )
}




export default CampersForm;