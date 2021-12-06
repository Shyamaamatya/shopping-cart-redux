import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

import {BsFillCartFill} from "react-icons/bs"
import { useSelector } from 'react-redux';


 const Navbar = () => {
    const cartItem = useSelector((state) => state?.shopReducer?.list)
    console.log('cartItem.length', cartItem.length)

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
                            <Link to="/cart">My Cart {cartItem?.length} </Link>
                        </li>
                        <li className="navbar-right-li">
                            <Link to="/cart">
                                <i className="cart-icon">
                                <BsFillCartFill/>
                                </i>
                            </Link>
                        </li>
                        </ul>
                        </div>
                    
        </div>
        </div>
    )
}

export default Navbar;
