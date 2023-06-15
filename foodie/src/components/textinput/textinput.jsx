import React from "react";
import './textinput.css';

const Textinput = (props) => {
    return(
        <div>
            <input 
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            value={props.value} 
            onChange={(event) =>props.onChange(event)}
            />
        </div>
    );
}

export default Textinput;