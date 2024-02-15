import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import linkReducer from './linkSlice';
import basketReducer from './basketSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        number: linkReducer,
        basket: basketReducer
    }
})