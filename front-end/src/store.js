import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './slices/mainSlice';
import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    [mainSlice.reducerPath]: mainSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainSlice.middleware),
  devTools: true,
});

export default store;
