import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },

    deleteItem(state, action) {
      return state.filter((item) => item.name != action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, deleteItem } = actions;
export default reducer;
