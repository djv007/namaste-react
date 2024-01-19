import React from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {info} = props.resData;
    const {cloudinaryImageId,name, locality, cuisines, costForTwo,avgRating } = info;
    const {deliveryTime} = info.sla;
    return (
        <div className='m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg hover:bg-gray-300'>
            <img
                className='rounded-lg' 
                src= {
                    CDN_URL + cloudinaryImageId
                }/>
            <h4 className='font-bold py-4 text-lg'>{name}</h4>
            <h5>{locality}</h5>
            <h5 className='flex flex-wrap'>{cuisines.join(',')}</h5>
            <h5>{avgRating} star</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;