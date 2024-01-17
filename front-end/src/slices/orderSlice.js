import { ORDERS_URL } from '../constants/constants';
import { mainSlice } from './mainSlice';

export const ordersSlice = mainSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersSlice;
