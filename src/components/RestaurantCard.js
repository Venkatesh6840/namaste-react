import React from "react";

export const RestaurantCard = (props) => {
    return (
      <div className="res-card" style={{ backgroundColor: "lightcyan" }}>
        <img
          alt="res-logo"
          className="res-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+props.restData.info.cloudinaryImageId}
        />
        <h3>{props.restData.info.name}</h3>
        <h4>{props.restData.info.cuisines.join(", ")}</h4>
       < h4>{props.restData.info.costForTwo}</h4>
       < h4>{props.restData.info.avgRating}</h4>
      </div>
    );
  };

  export default RestaurantCard;