import { BLURAYS_URL } from '../constants.js/constants';
import { mainSlice } from './mainSlice';

export const bluraysSlice = mainSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlurays: builder.query({
      query: () => ({
        url: BLURAYS_URL,
      }),
      keepUnusedDataFor: 4,
    }),
    getBluray: builder.query({
      query: (blurayId) => ({
        url: `${BLURAYS_URL}/${blurayId}`,
      }),
      keepUnusedDataFor: 4,
    }),
  }),
});

export const { useGetBluraysQuery, useGetBlurayQuery } = bluraysSlice;
