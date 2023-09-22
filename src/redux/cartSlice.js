import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const item = state.find((item) => item.product.slug === action.payload.product.slug);

      item
        ? (item.quantity = Number(item.quantity) + Number(action.payload.quantity))
        : Number(state.push(action.payload));
    },

    deleteItem(state, action) {
      const item = state.find((item) => item.product.slug === action.payload.slug);

      if (item.quantity > 1) {
        item.quantity = Number(item.quantity) - 1;
      } else {
        return state.filter((item) => item.product.slug != action.payload.slug);
      }
    },
    emptyCart(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, deleteItem, emptyCart } = actions;
export default reducer;
