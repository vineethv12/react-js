import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    return (
        <div className="flex justify-between m-4 border border-black p-4">
            {/* Logo */}
            <div className="logo-container bg-slate-400">
                <img className="w-52" src={LOGO_URL}></img>
            </div>
            {/* Nav items */}
            <div className="nav-items flex items-center">
                <ul className="flex p-10 ">
                    <li className="pl-10">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="pl-10" ><Link to="/">Home</Link></li>
                    <li className="pl-10"><Link to="/about">About us</Link> </li>
                    <li className="pl-10"><Link to="/contact">Contact us</Link></li>
                    <li className="pl-10"><Link to="/grocery">Grocery</Link></li>
                    <button onClick={() => { btnName == "Login" ? setBtnName("Logout") : setBtnName("Login") }} className="pl-10"> {btnName} </button>
                    <li className="pl-10"><Link to="/grocery">{data.loggedInUser}</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;