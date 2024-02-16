import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import './Basket.css';

export default function BasketMin() {

    const [basketSh, setbasketSh] = useState(false);

    const basket = useSelector( state => state.basket.basket );
    const quantityOrder = useSelector( state => state.basket.quantityOrder );
    

    useEffect(() => {
        setbasketSh(true); 
        return ()=>{
            setbasketSh(false);
        };
    }, []);

    let basketJSX;
    if(basket) {
        basketJSX = basket.map((element, index) => {
            return (
                <div className="wrapper-basket-min" key={element.id}>
                    <img className="basket-img-min" src = {"/Shop/image/" + element.img} alt='product'/>
                    <p className="basket-name">{element.name}</p>
                    <p className="basket-cost">{quantityOrder[index].cost}&euro;</p>
                </div>
                )
            })
    }


  return (
    <div className={`open-cart ${basketSh ? "open-cartSh" : ""}`}>{basket.length > 0?basketJSX:<div>Cart is empty</div>}</div>
  )
}
