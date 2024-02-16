import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { quantityAdd, quantityDelete, deleteProductRd, deleteBasket } from "../redux/basketSlice.js";
import { getLink } from "../redux/linkSlice.js";

import './Basket.css';

export default function Basket() {
    
    const basket = useSelector( state => state.basket.basket );
    const quantityOrder = useSelector( state => state.basket.quantityOrder );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getLink(1) );
    }, []);
    
    function deleteBasketProduct (id) {
        dispatch( deleteProductRd (id) );
        dispatch( deleteBasket (true) );
    }

    function addProduct (id) {
        dispatch( quantityAdd (id) );
    }
    
    function deleteProduct (id) {
        dispatch( quantityDelete (id) );
    };

    let basketJSX;
    let costOrder = 0;
    if(basket) {
        basketJSX = basket.map((element, index) => {
            costOrder += parseInt(quantityOrder[index].cost);
            return (
                <div className="wrapper-basket" key={element.id}>
                    <img className="basket-img" src = {"/Shop/image/" + element.img} alt='product'/>
                    <p className="basket-name">{element.name}</p>
                    <p className="basket-cost">{quantityOrder[index].cost}&euro;</p>
                    <input type="button" className="basket-add" defaultValue={"+"} onClick={(eo) => addProduct(element.id)} /*disabled={quantityOrder[index].quantity < element.quantity?false:true}*//>
                    {quantityOrder[index].id === element.id?<span>{quantityOrder[index].quantity}</span>:"ошибка"}
                    <input type="button" className="basket-delete" defaultValue={"-"} onClick={(eo) => deleteProduct(element.id)} disabled={quantityOrder[index].quantity <= 1?true:false}/>
                    <input type="button" className="basket-delete-product" defaultValue={"Delete"} onClick={() => (deleteBasketProduct(element.id))}/>
                </div>
                )
            })
    }

    let productOutBasketJSX = [<div key={551}><div>Cart is empty</div></div>];
    let productInBasketJSX = [<div key={552}>
                                {basketJSX}
                                <p className="basket-text">Order price: {costOrder}</p>
                                <input type="button" className="basket-checkout" defaultValue={"Checkout"}/>
                              </div>];

  return (
    <div className="Basket">
        {(!basket || basket.length === 0)?productOutBasketJSX:productInBasketJSX}
    </div>
  )
}
