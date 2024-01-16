import { USERS_URL } from '../constants/constants.js';
import { mainSlice } from './mainSlice';

export const usersSlice = mainSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL / login,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersSlice;
