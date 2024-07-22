import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [listOfRes, setListOfRes] = useState(resList);



    return (
        <div className="body">
            <div className="res-filter">
                <button className="res-filer-btn" onClick={() => {
                    const filteList = listOfRes.filter((res) => (
                        res.info.avgRating > 4.2
                    ));
                    setListOfRes(filteList);

                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* Restaurant Card */}
                {/* <RestaurantCard timings="20mins" resName="KFC" cuisine="Burger, Fast Food" rating="4.5 stars" /> */}
                {listOfRes.map((res) => (<RestaurantCard key={res.info.id} resData={res} />))}
            </div>
        </div>
    )
}


export default Body;