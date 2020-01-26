import React from "react";

const Campers = props => {
    console.log(props);
    return (
        <div>
            {props.camperList.map((camper) => {
                return (
                    <div key={camper.id}>
                        <h2>{camper.name}</h2>
                        <h3>{camper.theme}</h3>
                        <p>{camper.about}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Campers;