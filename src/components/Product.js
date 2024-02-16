import React from 'react';

import { useDispatch } from 'react-redux';
import { setProduct, add } from "../redux/basketSlice.js";

import './Product.css';

const Product = ({info}) => {

  const dispatch = useDispatch();
  

  function addProductBasket () {
    dispatch( setProduct ({id: info.id, name: info.name, cost: info.cost, img: info.img, quantity: info.quantity}) );
    dispatch( add (true) );
  }

  return (
      <div className="Product">
        <img src = {"/Shop/image/" + info.img}/>
        <p className="name">{info.name}</p>
        <p className="description">{info.shortDescription}</p>
        <p className="cost">{info.cost}&euro;</p>
        {(info.quantity > 0)?<input type="button" className="add-to-cart" defaultValue={"+"} onClick={addProductBasket}/>:<p>Not available</p> }
      </div>
  )
}

export default React.memo(Product);
