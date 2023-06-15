import React from "react";
import PropTypes from "prop-types";
import './RestaruantCard.css';

const RestaruantCard =() =>{
    return(
        <div className="restaurant-card">
            <img className="restaurant-logo" src={props.Food.img} alt="restaurant-pic"/>
            <div className="restaurant-name wrap-text">{props.restaurant.name}</div>
            <div className="restaurant-desc wrap-text">{props.restaurant.cusins}</div>
            <div className="restaurant-location">
                <div className="distance">{props.restaurant.distance}</div>
            </div>
            <div className="restaurant-review">{`${props.restaurant.review} reviews`}</div>

        </div>
    );
};

export default RestaruantCard;