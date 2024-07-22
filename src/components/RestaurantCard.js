import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props/* Also can destructure here {resName, cuisine, rating, timing} */) => {
    // const { rating, timings } = props;
    const { resData } = props

    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="res-card" style={{ background: "#f0f0f0" }}>
            <img className="res-card-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="res-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{resData.info.sla.deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;