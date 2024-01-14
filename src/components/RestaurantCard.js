import React from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {info} = props.resData;
    const {cloudinaryImageId,name, locality, cuisines, costForTwo,avgRating } = info;
    const {deliveryTime} = info.sla;
    return (
        <div className='res-card'>
            <img
                className='res-logo' 
                src= {
                    CDN_URL + cloudinaryImageId
                }/>
            <h4>{name}</h4>
            <h5>{locality}</h5>
            <h5>{cuisines.join(',')}</h5>
            <h5>{avgRating} star</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;