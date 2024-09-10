import { CDN_IMGURL } from "../config/Constants"; //This is the importing of "named exports"

const Restocards = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info; // Destructuring our code in order to make it clean or else below we have to give (resData.info.name etc)
  return (
    <div className="resto-cards">
      <img className="res-img" src={CDN_IMGURL + cloudinaryImageId} />
      <h4 className="res-name">{name}</h4>
      <h5 className="res-name1">{cuisines.join(", ")}</h5>
      <h5 className="res-name1">{avgRating}</h5>
      <h5 className="res-name1">{deliveryTime}</h5>
    </div> // The above is the destructured value
  );
};

export default Restocards;
