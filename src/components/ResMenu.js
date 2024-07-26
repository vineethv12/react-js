import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
const ResMenu = () => {

    const [showIndex, setShowIndex] = useState(0);


    const { resId } = useParams();


    const listResMenu = useResMenu(resId);

    if (listResMenu == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = listResMenu?.cards[2]?.card?.card?.info

    const { itemCards } = listResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log("ResMenu", listResMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = listResMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((categories) => categories.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");



    // console.log("categories", categories)

    return (
        <div className="text-center border-black">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>

            {categories.map((categories, index) => (<ResCategory
                showItems={index == showIndex ? true : false}
                setShowIndex={(clickedIndex) => setShowIndex(clickedIndex == showIndex ? null : clickedIndex)}
                currentIndex={index}
                key={categories?.card?.card.title}
                categoriesData={categories?.card?.card} />))}
        </div>
    );
};

export default ResMenu;