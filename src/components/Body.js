import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard from './RestaurantCard';
import resList  from '../utils/mockData';



const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);
    const updateResFun = () => {
        const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);  
        setListOfRes(filteredList);
    }
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className='filter-btn'
                    onClick={() => {
                        // const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);  
                        // setListOfRes(filteredList);
                        updateResFun();
                    }}
                    >
                    Top Rated Restaurants

                </button>
            </div>
            <div className='res-container'>
                {
                    listOfRes.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                    ))
                }

            </div>
        </div>
    )
}

export default Body;