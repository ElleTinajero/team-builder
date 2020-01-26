import React from "react";
import "./camperStyling.scss";

const Campers = props => {
    console.log(props);
    return (
        <div>
            {props.camperList.map((camper) => {
                return (
                    <div className="camperContainers" key={camper.id}>
                        <h2 className="nameContainer">{camper.name}</h2>
                        <h3 className="themeContainer">{camper.theme}</h3>
                        <p className="aboutContainer">{camper.about}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Campers;