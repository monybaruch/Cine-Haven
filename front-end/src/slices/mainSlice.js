import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl });

export const mainSlice = createApi({
  baseQuery,
  tagTypes: ['Bluray', 'Order', 'User'],
  endpoints: (builder) => ({}),
});