import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((x) => x._id === item._id);

      if (isItemExist) {
        state.cartItems = state.cartItems.map((x) => (x._id === isItemExist._id ? item : x));
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      //calc the items price
      state.itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      //calc the shipping cost (if the total order is over 60$ then the shipping is free , else the shipping is 7$)

      state.shippingPrice = state.itemsPrice > 60 ? 0 : 7;

      // calc total price

      state.totalPrice = Number(state.itemsPrice) + Number(state.shippingPrice).toFixed(2);

      //save the state to local storage

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
