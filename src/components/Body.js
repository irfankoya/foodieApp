// Body.js
import { useState } from "react";
import { Link } from "react-router-dom";
import Restocards from "./Restocards";
import useFetchRestaurants from "../config/useRestaurant";

const Body = () => {
  let [searchText, setSearchText] = useState("");

  // Using the custom hook
  const { restaurants, filteredRestaurants, setFilteredRestaurants, loading } = useFetchRestaurants(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.584418399999999&lng=76.85033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const handleSearch = () => {
    let filtered = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const filterTopRated = () => {
    const topRated = restaurants.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurants(topRated);
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body">
      <div className="Filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="Filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-cards">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <Restocards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
