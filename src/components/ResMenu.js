import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const ResMenu = () => {

    const [listResMenu, setListResMenu] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        setListResMenu(json.data);
    };

    if (listResMenu == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = listResMenu?.cards[2]?.card?.card?.info

    const { itemCards } = listResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="res-menu-container">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>)}
            </ul>
        </div>
    );
};

export default ResMenu;