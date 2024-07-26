import { useState } from "react";
import ResCategoryItemList from "./ResCatergoryItemList";

const ResCategory = ({ categoriesData, showItems, setShowIndex, currentIndex }) => {


    const { title, itemCards } = categoriesData;

    const handClick = () => {
        setShowIndex(currentIndex);
    }

    return (
        <div>
            <div className="w-6/12 mx-auto bg-slate-200 shadow-xl p-4 my-4">
                <div className="flex justify-between cursor-pointer" onClick={handClick}>
                    <span className="font-bold text-lg justify-between">{title} ({itemCards.length}) </span>
                    <span>⬇️</span>
                </div>

                {showItems && <ResCategoryItemList items={itemCards} />}

            </div>
        </div>
    );
};

export default ResCategory;