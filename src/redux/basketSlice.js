import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    basket: [],
    quantityOrder: [],
    loaded: false,
    addBasket: false,
    deleteBasketBul: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    setProduct: (state,action) => {
        let id = [];
        if(!state.basket) {
            state.basket = [...state.basket, action.payload];
            state.quantityOrder = [...state.quantityOrder, {id: action.payload.id, quantity: 1, cost: action.payload.cost, startCost: action.payload.cost}]
         } else {
            state.basket.forEach(element => {
                id = [...id, element.id];
            });
            if(!(id.includes(action.payload.id))) {
                state.basket = [...state.basket, action.payload];
                state.quantityOrder = [...state.quantityOrder, {id: action.payload.id, quantity: 1, cost: action.payload.cost, startCost: action.payload.cost}]
            }
        }
    },

    getProduct: (state,action) => {
        state.basket = action.payload;
    },

    quantityAdd: (state,action) => {
         state.quantityOrder.forEach((element) => {
            if(element.id === action.payload) {
                element.quantity++;
                element.cost = element.startCost * element.quantity;
        }})
    },

    quantityDelete: (state,action) => {
        state.quantityOrder.forEach((element) => {
           if(element.id === action.payload) {
               element.quantity--;
               element.cost = element.startCost * element.quantity;
       }})
    },

    load: (state,action) => {
        state.loaded = action.payload;
    },

    add: (state,action) => {
        state.addBasket = action.payload;
    },

    readDataBasket: (state,action) => {
        state.basket = action.payload.basket;
        state.quantityOrder = action.payload.quantityOrder;
    },

    deleteProductRd: (state,action) => {
        state.basket = state.basket.filter(client => {
            return client.id !== action.payload;
        });
        state.quantityOrder = state.quantityOrder.filter(client => {
            return client.id !== action.payload;
        });
    },

    deleteBasket: (state,action) => {
        state.deleteBasketBul = action.payload;
    },
  },
});

export const { setProduct, quantityAdd, quantityDelete, getProduct, load, add, readDataBasket, deleteProductRd, deleteBasket } = basketSlice.actions;

export default basketSlice.reducer;