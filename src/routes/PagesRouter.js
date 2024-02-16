import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageMain from '../pages/PageMain';
import PageProducts from '../pages/PageProducts';
import PageBasket from '../pages/PageBasket';

export default function PagesRouter() {
  return (
    <Routes>
        <Route path="/Shop" element={<PageMain/>} />
        <Route path="/products/:count/:filter/:category/:price" element={<PageProducts/>}/>
        <Route path="/basket" element={<PageBasket/>} />
    </Routes>
  )
}
