import React from "react";
import './HeaderBar.css';
import {Link} from 'react-router-dom';
import logo from '../resources/images/logo.webp';

const HeaderBar = () => {
    return(
        <div className="header">
            <div className="header-content child">
                <h1>FOOD</h1>
                <Link to="/">
                </Link>
                <div className="user-name">
                    <span>Hello, Rovind</span>
                    <i></i>
                </div>
            </div>
        </div>
    );
}

export default HeaderBar;