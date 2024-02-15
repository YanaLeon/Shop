import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    number: 1
};

export const linkSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {

    getLink: (state,action) => {
      state.number = action.payload;
    },

  },
});

export const { getLink } = linkSlice.actions;

export default linkSlice.reducer;