import React from "react";
// This Code is Technicall Functional, but does not work with my project as is with my component structure and skillset

export const DrawToggleButton = (props) => {
    return(
    <button className="toggle-button" onClick= {props.click}>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
    </button>
    )
}