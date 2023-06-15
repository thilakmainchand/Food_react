import React from "react";
import './login.css';
import Custombutton from "../custombutton/custombutton";
import Rignt from "../right/right";
import HeaderBar from "../HeaderBar/HeaderBar";

const Login = (props) => {
    
    
    return(
        <>
        
        <HeaderBar/>
        <div className="all">
            <div className="left"></div>
            <Rignt/>
        </div>
        </>
            
    );
}

export default Login;