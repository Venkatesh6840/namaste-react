import { useEffect, useState } from "react";
import { CARD_URL_1,CARD_URL_2 } from "../utils/constant";

export const useRestarantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(CARD_URL_1 + resId + CARD_URL_2);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}