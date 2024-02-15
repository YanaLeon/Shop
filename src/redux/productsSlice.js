import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    inStock: false,
    category: "All",
    price: "Not selected",
    copy: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    readData: (state,action) => {
      state.products = action.payload;
      state.copy = action.payload;
    },

    filterStockAction: (state,action) => {
        state.inStock = action.payload;
    },

    filterCategoryAction: (state,action) => {
        state.category = action.payload;
    },

    filterPriceAction: (state,action) => {
        state.price = action.payload;
    },

    setData: (state,action) => {
        state.products = action.payload;
    },

  },
});

export const { readData, setProducts, filterStockAction, filterCategoryAction, setData, filterPriceAction } = productsSlice.actions;

export default productsSlice.reducer;