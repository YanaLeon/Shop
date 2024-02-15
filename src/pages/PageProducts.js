import React, {useEffect, useRef} from 'react';

import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getLink } from "../redux/linkSlice.js";

import Products from '../components/Products';
import Modal from '../components/Modal';
import { productsLoad } from "../redux/productsLoad.js";

export default function PageProducts() {

    let divScroll = useRef(null);
    const stock = useSelector( state => state.products.inStock);

    const params = useParams();
    const count = params.count;
    let number = Number(count.slice(1, 2));
    
    const addBasket = useSelector( state => state.basket.addBasket );
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch( productsLoad );
      divScroll.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }, [number]);

  return (
    <main ref={divScroll}>
        <Products count = {number} />
        {addBasket?<Modal/>:null}
    </main>
  )
}
