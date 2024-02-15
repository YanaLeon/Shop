import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Basket from '../components/Basket';
import ModalDelete from '../components/ModalDelete';
import { basketLoad } from "../redux/basketLoad.js";

export default function PageBasket() {

  const deleteBasketBul = useSelector( state => state.basket.deleteBasketBul );
  const dispatch = useDispatch();

  const basket = useSelector( state => state.basket.basket );

  useEffect(() => {
    if(basket.length === 0) {
      dispatch( basketLoad );
    }
  }, []);

  return (
    <>
    <Basket/>
    {deleteBasketBul?<ModalDelete/>:null}
    </>
  )
}
