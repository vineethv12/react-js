import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useResMenu = (resId) => {

    const [listResMenu, setListResMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        // console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        setListResMenu(json.data);
    };
    return listResMenu;
}

export default useResMenu; 