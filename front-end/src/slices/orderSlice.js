import { ORDERS_URL } from '../constants/constants.js';
import { mainSlice } from './mainSlice';

export const ordersSlice = mainSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: order,
      }),
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        method: 'GET',
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } = ordersSlice;
