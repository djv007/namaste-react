import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard ,  { withPromotedLabel } from './RestaurantCard';
import resList  from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';



const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    console.log("body" , listOfRes);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    
    const updateResFun = () => {
        const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);  
        setListOfRes(filteredList);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return ( <h1>You are offline!</h1>);
    }
    const { loggedInUser, setUserName } = useContext(UserContext);
    return filteredListOfRes.length === 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    type='text'
                    className='border border-solid border-black'
                    value = {searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button 
                    className='px-4 py-2 bg-green-100 m-4 rounded-lg'
                    onClick={() => {
                       const filteredList =  listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                       setFilteredListOfRes(filteredList);
                    }}>
                        Search
                    </button>
                </div>
                <div className='m-4 p-4 flex items-center'>
                <button 
                    className='px-4 py-2 bg-gray-100 rounded-lg'
                    onClick={() => {
                        updateResFun();
                    }}
                    >
                    Top Rated Restaurants

                </button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                
            </div>
            <div className='flex flex-wrap'>
                {
                    filteredListOfRes.map((restaurant) => (
                        <Link to = {"restaurant/" + restaurant.info.id} 
                        key={restaurant.info.id} >
                            {/* if res is promoted then add HOC */}
                            {
                                restaurant.info?.aggregatedDiscountInfoV3?.header ?(
                                <RestaurantCardPromoted resData = {restaurant}/>
                                )
                                : (
                                <RestaurantCard resData = {restaurant} />
                                )
                            }
                            
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Body;