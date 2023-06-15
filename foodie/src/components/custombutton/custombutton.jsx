import React from "react";
import './custombutton.css';

const Custombutton = (props) => {
    return(
        <div>
            <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
            >
                {props.value}
            </button>
        </div>
    );
}

export default Custombutton; 