import React, { useEffect ,useState} from "react";
    
    
    import './Restaurant.css';
    import HeaderBar from "../HeaderBar/HeaderBar";
    import RestaruantCard from "../RestaurantCard/RestaurantCard";

    const Restaurant = () =>{
        const[data,setData]=useState([]);

        useEffect(()=>{
            const fetchRestaurantList = async() => {
            let response = await fetch("http://myjson.dit.upm.es/api/bins/4k1m")
            const data = await response.json();
            if(data.length>0){
                setData(data)
            }
            };
            fetchRestaurantList();
    },[]);
    return(
        <div className="restaruant-list-container">
            <HeaderBar />
            <div className="restaurant-list-wrapper child">
                {data.map((res)=>{
                    return(
                        <div key={res.id+res.name}>
                            <RestaruantCard key={res.id} restaurant={res}/>
                        </div>
                    );
                })}
            </div>
        </div>       
    );
    }
    export default Restaurant;