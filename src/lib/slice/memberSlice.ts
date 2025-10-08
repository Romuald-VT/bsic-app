import { createSlice } from '@reduxjs/toolkit';

const memberSlice = createSlice({
  name: 'member',
  initialState: {
    customer: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.customer = action.payload.customer;
    },
    logout: (state) => {
      state.customer = null;
    },
  },
});

export const { loginSuccess, logout } = memberSlice.actions;

export default memberSlice.reducer;
