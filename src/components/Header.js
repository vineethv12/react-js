import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            {/* Nav items */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={() => { btnName == "Login" ? setBtnName("Logout") : setBtnName("Login") }} className="login-button"> {btnName} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;