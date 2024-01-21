import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { RESTAURANT_MENU_CATEGORY } from "../utils/constants";
import { useState } from "react";

const ResInfo = () => {
    const {resId} = useParams();
    const dummy = "Dummy Data";

    let resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if(resInfo == null) return (<Shimmer/>);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    let { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // this is done as data is inconsistent in swiggy's API - for some restaurants itemCards is present inside categories[0]
    if(itemCards === undefined) 
    {
          itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0].itemCards;
    }
    // console.log("item cards" ,resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // writing in "" as @ hai name vo usko direct nahi likh skte
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === RESTAURANT_MENU_CATEGORY
        );
        // console.log("categories" , categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordion */}
            {categories.map((category,index) => (
            <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
            dummy={dummy}
          />
            )
            )}
        </div>

    )
};

export default ResInfo;

