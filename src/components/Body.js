import Restocards from "./Restocards";
import { useEffect, useState } from "react";

const Body = () => {
  let [restaurent, setRestaurent] = useState([]);
  let [filteredRestaurent, setfilteredRestaurent] = useState([]);
  let [searchText, setsearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.584418399999999&lng=76.85033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // Parse JSON response
    setRestaurent(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestaurent(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  console.log("Body");
  return restaurent.length == 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body">
      <div className="Filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filteredRestaurent = restaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="Filter-btn"
          onClick={() => {
            //filter logic here
            const filterRating = restaurent.filter(
              (res) => res.info.avgRating > 4.3
            );
            setRestaurent(filterRating);
          }}
        >
          Top Rated restaurent
        </button>
      </div>
      <div className="res-cards">
        {filteredRestaurent.map((restaurent) => (
          <Restocards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div> //In the above map is done to iterate through all the objects in the list and print it instead of for also we must keep key inorder to keep unique id for each element
  ); //whenever doing map in this sitation we should keep "key" try to use key instead of index
};

export default Body;
