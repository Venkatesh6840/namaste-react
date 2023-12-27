import React from "react";
import { RestaurantCard ,withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect ,useRef} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ref = useRef(null);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/dapi/restaurants/list/v5?lat=17.4476179&lng=78.5355606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const searchClick =() =>{
    if (searchText === '') {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const newListOfRestaurants = filteredRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText))
      setFilteredRestaurants(
        newListOfRestaurants.length !== 0 ? newListOfRestaurants : filteredRestaurants
      );
    }
  }

  return typeof listOfRestaurants !== 'undefined' && listOfRestaurants.length !== 0 ? (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4">
          <input type="text" className="border border-solid border-black" ref={ref} onChange={(e) => {
            setSearchText(e.target.value)
          }}/>
          <button className="px-4 py-1.4 bg-green-100 m-4 border border-solid rounded-lg"  onClick={searchClick}>Search</button>
        </div>
        <div className="m-4 p-4">
        <button
          className="px-4 py-0.5 bg-gray-200 p-2 mt-3 m-4  rounded-lg"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((restaurant) => restaurant.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
        </div>

      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant, i) => (
          <Link to={typeof restaurant !== 'undefined' ? "/restaurant/"+restaurant.info.id : ""} key={i}>
            {restaurant.info.name.includes("Parivaar Restaurant") ?
                <RestaurantCardPromoted restData={restaurant} /> : 
                <RestaurantCard restData={restaurant} /> }
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
