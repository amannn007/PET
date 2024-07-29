import { createSlice } from '@reduxjs/toolkit';

const petSlice = createSlice({
  name: 'pets',
  initialState: [],
  reducers: {
    addPet: (state, action) => {
      state.push(action.payload);
    },
    removePet: (state, action) => {
      return state.filter(pet => pet.id !== action.payload);
    },
  },
});

export const { addPet, removePet } = petSlice.actions;
export default petSlice.reducer;
