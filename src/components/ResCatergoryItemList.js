import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ResCategoryItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item) => (<div key={item.card.info.id} className="flex justify-between p-2 m-2 border-b-2 border-b-slate-300 text-left">


                <div className="9/12">
                    <div className="flex flex-col p-2">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span>₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span>
                    </div>
                    <div>
                        <p className="text-xs p-2">{item.card.info.description}</p>
                    </div>
                </div>
                <div className="w-3/12">
                    <div className="absolute">
                        <button className="p-2  shadow-lg mx-12 rounded-md bg-slate-600 text-white" onClick={() => handleAddItem(item)}>Add +</button>

                    </div>
                    <img className="w-[150px] h-[130px]" src={CDN_URL + item.card.info.imageId} />

                </div>

            </div>))}
        </div>
    );
};

export default ResCategoryItemList;