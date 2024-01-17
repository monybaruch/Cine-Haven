import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtil';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

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
      return updateCart(state, item);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, saveShippingAddress } = cartSlice.actions;

export default cartSlice.reducer;
