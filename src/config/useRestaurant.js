
import { useState, useEffect } from "react";

const useFetchRestaurants = (url) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json)

        const fetchedRestaurants =
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        
        setRestaurants(fetchedRestaurants);
        setFilteredRestaurants(fetchedRestaurants);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }

    };

    fetchData();
  }, [url]);

  return { restaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useFetchRestaurants;
