import { CDN_URL } from "../utils/constants";
// import ResMenu from "./ResMenu";

const RestaurantCard = (props/* Also can destructure here {resName, cuisine, rating, timing} */) => {
    // const { rating, timings } = props;
    const { resData } = props

    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
    return (

        <div className="res-card flex flex-col w-56 h-80 m-10 pt-2 border border-black" style={{ background: "#f0f0f0" }}>
            <img className="res-card-logo w-24 mx-auto" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="res-name pt-2 pl-2">{name}</h3>
            <h4 className="pt-2 pl-2">{cuisines.join(", ")}</h4>
            <h5 className="pt-2 pl-2">{avgRating} stars</h5>
            <h5 className="pt-2 pl-2">{resData.info.sla.deliveryTime} minutes</h5>
        </div>
    );
};

export const withOpenRes = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white mt-4 ml-6 px-2">Open</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;