import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userData = action.payload; // setting up the userData as the payload
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
