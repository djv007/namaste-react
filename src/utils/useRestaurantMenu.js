import { useEffect, useState } from "react";
import { RES_INFO } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchData();
    }, []);

     const fetchData = async () =>  {
        const data = await fetch(RES_INFO + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
};

export default useRestaurantMenu;
