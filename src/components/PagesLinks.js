import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { basketLoad } from "../redux/basketLoad.js";

import { FaShoppingCart } from "react-icons/fa";
import BasketMin from '../components/BasketMin.js';

import './PagesLinks.css';

export const PagesLinks = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const number = useSelector( state => state.number );
    const basket = useSelector( state => state.basket.basket );
    const dispatch = useDispatch();

    const stock = useSelector( state => state.products.inStock);
    const category = useSelector( state => state.products.category);
    const price = useSelector( state => state.products.price);

    useEffect(() => {
      dispatch( basketLoad );
    }, []);
          
    function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive ){
        className="ActivePageLink";
      }
      return className;
    }

    return (
      <>
      <div className="wrapper-link-logoPageLink">
        <NavLink to="/" end className="logo-aPageLink">
            <img src='/Shop/image/logo.png' className="logoPageLink" alt="logo"/>
        </NavLink>
        <div className="navPageLink">
            <NavLink to="/" end    className={getLinkClass}>Main</NavLink>
            <NavLink to={"/products/:"+number.number+"/:"+stock+"/:"+category+"/:"+price} className={getLinkClass}>Products</NavLink>
            <NavLink to="/basket" className={getLinkClass}>{
                        basket && basket.length > 0?
                        <>
                         <FaShoppingCart className="shop-cartPageLink" onMouseEnter={() => {setCartOpen(true)}} onMouseLeave={() => {setCartOpen(false)}}/>
                         <div className="product-numberPageLink">
                          <span>{basket.length}</span>
                          </div>
                        </>:<FaShoppingCart onMouseEnter={() => {setCartOpen(true)}} onMouseLeave={() => {setCartOpen(false)}}/>}
              </NavLink>
        </div>
        {cartOpen?<BasketMin/>:null}
      </div>
      </>
    );

};