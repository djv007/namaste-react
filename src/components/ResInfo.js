import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_INFO } from "../utils/constants";
import Shimmer from "./Shimmer";

const ResInfo = () => {
    const {resId} = useParams();

    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch(RES_INFO + resId);
        const json = await data.json();
        setResInfo(json?.data);
        // console.log(json);
    };

    useEffect(()=> {
        fetchMenu();
    }, []);

    if(resInfo == null) return (<Shimmer/>);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    let { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // this is done as data is inconsistent in swiggy's API - for some restaurants itemCards is present inside categories[0]
    if(itemCards === undefined) 
    {
          itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0].itemCards;
    }
    // console.log("itemCards" , itemCards);
    
    return (
        <div className="resInfo">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
            {itemCards.map(item => <li key={item.card.info.id}>
                {item.card.info.name} - {" Rs "} 
                {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>)}
            </ul>
        </div>

    )
};

export default ResInfo;

