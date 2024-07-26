import RestaurantCard, { withOpenRes } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);
    const [filterListOfRes, setFilterListOfRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const ResCardOpen = withOpenRes(RestaurantCard);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1215682&lng=77.6207127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) return (<h1>Looks like your offline</h1>);

    const { loggedInUser, setUserName } = useContext(UserContext);

    //Conditional Rendering
    return listOfRes.length == 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="res-filter flex items-center border border-black m-4 px-4">
                <div className="res-search m-4 p-4">
                    <input type="text" className="res-search-box border border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="m-4 bg-slatse-500 px-4 py-1 rounded-md border border-black" onClick={() => {
                        const filterSearch = listOfRes.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterListOfRes(filterSearch);
                    }}>Search</button>
                </div>
                {/* <div className="m-4 p-4">
                    <button className="res-filter-btn border border-black rounded-sm p-1 bg-slate-400" onClick={() => {
                        const filteList = listOfRes.filter((res) => (
                            res.info.avgRating > 4.2
                        ));
                        setListOfRes(filteList);
                    }}>Top Rated Restaurant</button>
                </div> */}
                <div >
                    <label>UserName: </label>
                    <input className="border border-black pl-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
                </div>


            </div>
            <div className="res-container flex flex-wrap border border-black m-4">
                {/* Restaurant Card */}
                {/* <RestaurantCard timings="20mins" resName="KFC" cuisine="Burger, Fast Food" rating="4.5 stars" /> */}
                {filterListOfRes.map((res) => (<Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                    {res.info.isOpen == true ? <ResCardOpen resData={res} /> :
                        <RestaurantCard resData={res} />
                    }
                </Link>))}
            </div>
        </div>
    )
}


export default Body;