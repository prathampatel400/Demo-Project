import React from "react";
import { NavLink , Link } from "react-router-dom";
import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo2 from '../assets/logo2.jpg'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={logo2} alt={logo2}/>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">AllProducts</NavLink>
              </li>
              {/* <li>
                <NavLink to="/AllCarts">AllCarts</NavLink>
              </li> */}
              <li>
                <NavLink to="/NewArrivals">New Arrivals</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="AddCarts">
          <Link to="/AddCart">
          <div className="cart-icon">
          <FaShoppingCart className="cart-logo" /><sup>({cartItems.length})</sup>
          </div>
          </Link>
          <Link to='/Registration'><button>Signup</button></Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
