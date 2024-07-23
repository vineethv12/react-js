import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);
    const [filterListOfRes, setFilterListOfRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1215682&lng=77.6207127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log("userEffect")
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log("Rednering")

    //Conditional Rendering
    return listOfRes.length == 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="res-filter">
                <div className="res-search">
                    <input type="text" className="res-search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filterListOfRes = listOfRes.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterListOfRes(filterListOfRes);
                    }}>Search</button>
                </div>
                <button className="res-filter-btn" onClick={() => {
                    const filteList = listOfRes.filter((res) => (
                        res.info.avgRating > 4.2
                    ));
                    setListOfRes(filteList);

                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* Restaurant Card */}
                {/* <RestaurantCard timings="20mins" resName="KFC" cuisine="Burger, Fast Food" rating="4.5 stars" /> */}
                {filterListOfRes.map((res) => (<RestaurantCard key={res.info.id} resData={res} />))}
            </div>
        </div>
    )
}


export default Body;