import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"


 const Navbar = () => {
    return (
        <div>
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <h3>Shopping</h3>
                </Link>
            </div>

                        <div className="navbar-right">
                        <ul className="navbar-right-ul">
                        <li className="navbar-right-li">
                            <Link to="/">Shop</Link>
                        </li>
                        <li className="navbar-right-li">
                            <Link to="/cart">My Cart</Link>
                        </li>
                        </ul>
                        </div>
                    
        </div>
        </div>
    )
}

export default Navbar;
