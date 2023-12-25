import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect ,useRef} from "react";
import { Shimmer } from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/dapi/restaurants/list/v5?lat=17.4476179&lng=78.5355606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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

  return listOfRestaurants.length !== 0 ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" ref={ref} onChange={(e) => {
            setSearchText(e.target.value)
            
          }}/>
          <button className="search-button" onClick={searchClick} 
>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((restaurant) => restaurant.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant, i) => (
          <RestaurantCard key={i} restData={restaurant} />
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
