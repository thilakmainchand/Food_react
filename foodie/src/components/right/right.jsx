import React,{useState} from "react";
import './right.css';
import logo from '../resources/images/logo.webp';
import Textinput from "../textinput/textinput";
import Custombutton from "../custombutton/custombutton"

const Rignt = () =>{
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    return(
        <div className="right">
            <img src={logo} alt="logo" className="logo"/>
            
            <div className="form">
                <h3 className="si">SIGN IN</h3>
                <h4>{userName}</h4>
                <Textinput type="text" placeholder="username" className="tx"onChange={(event)=> setUserName(event.target.value)}/>
                <Textinput type="password" placeholder="password" className="tx"onChange={(event)=> setPassword(event.target.value)}/>
                <div className="hi">
                <Custombutton value="LOGIN" type="submit" className="li"/>
                </div>
                <div className="fp">
                    <span>Forget Password</span>
                    <a href="#">Click Here</a>
                </div>
            </div>        
        </div>
    );
}

export default Rignt;