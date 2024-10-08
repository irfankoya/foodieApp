import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../config/Constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <h1>No Data</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoMessage}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../config/Constants";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const {resId}= useParams();
  

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.584418399999999&lng=76.85033&restaurantId="+resId);
//     const json = await data.json();
//     console.log(json.data);
//     setResInfo(json.data);
//   };

//   if (!resInfo) return <h1>No Data</h1>;

//   // Safely accessing nested objects and arrays
//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards?.[2]?.card?.card?.info || {};
//   const { itemCards } =
//     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};

//   return (
//     <div className="menu">
//       {name ? <h1>{name}</h1> : <h1>No Restaurant Name</h1>}
//       {cuisines ? <h3>{cuisines.join(", ")}</h3> : <h3>No Cuisines Data</h3>}
//       {costForTwoMessage ? <h4>{costForTwoMessage}</h4> : <h4>No Cost Info</h4>}
//       <ul>
//         {itemCards?.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - Rs{" "}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         )) || <li>No Items Available</li>}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;


