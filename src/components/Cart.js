import { useDispatch, useSelector } from "react-redux";
import ResCategoryItemList from "./ResCatergoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-2 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length == 0 && <h1>Cart is empty, Please add items to cart!!</h1>}
                <ResCategoryItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;