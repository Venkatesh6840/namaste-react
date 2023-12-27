import React from "react";

export const RestaurantCard = (props) => {
    return (
      <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
        <img
          alt="res-logo"
          className="res-logo rounded-lg"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+props.restData.info.cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-l">{props.restData.info.name}</h3>
        <h4>{props.restData.info.cuisines.join(", ")}</h4>
       < h4>{props.restData.info.costForTwo}</h4>
       < h4>{props.restData.info.avgRating}</h4>
      </div>
    );
  };

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
      return (
        <div>
          <label className="absolute bg-black text-white pl-4 pr-4 text-center 
          mr-2 ml-4 rounded-xl" >Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

export default RestaurantCard;