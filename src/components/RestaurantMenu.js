import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestarantMenu } from "../utils/useRestaurantMenu";

export const RestaurantMenu=() => {
    const {resId} = useParams();
    const restMenuInfo = useRestarantMenu(resId);

    if (typeof restMenuInfo === "undefined") 
        return (<Shimmer/>)

    const itemList = (cards) => {
        if (typeof cards !== "undefined")
            return <>
                {cards.map((card,i) => <li key={i}> {card.card.info.name} : Rs.{card.card.info.price /100}</li>)}
            </>
        else 
        return <></>
    }
    const {name, cuisines, costForTwoMessage} = restMenuInfo !== null && typeof restMenuInfo !== "undefined" ? restMenuInfo?.cards[0]?.card?.card?.info : "";
    const {itemCards} =  restMenuInfo !== null && typeof restMenuInfo !== "undefined" ? restMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card  : "";

    console.log(restMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card);
    return restMenuInfo === null ?
        ( <Shimmer/>)
    : (
        <div className="menu">
            <h1>Name of the Restaurant : {name}</h1>
            <h2>Menu</h2>
            <ul>
            {itemList(itemCards)} 
            </ul>
        </div>
    )
}