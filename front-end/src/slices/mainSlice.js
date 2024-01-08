import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './../constants.js/constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const mainSlice = createApi({ baseQuery, tagTypes: ['Bluray', 'Order', 'User'], endpoints: (builder) => ({}) });
