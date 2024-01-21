import React , {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from "../utils/constants";
import UserContext from '../utils/UserContext';


const RestaurantCard = (props) => {
    const {info} = props.resData;
    const { loggedInUser } = useContext(UserContext);
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
            <h4>User : {loggedInUser} </h4>
        </div>
    )
};

// HOC  is a function which
// takes a comp as input and retuns a comp
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {

        return (
            <div>
                {/* <label>Promoted</label> */}
                <label className='m-2 p-2 rounded-lg absolute bg-black text-white'>
                    {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
                </label>
                <RestaurantCard {...props}/>
            </div>
        );

    };

};

export default RestaurantCard;