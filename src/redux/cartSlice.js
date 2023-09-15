import { createSlice } from '@reduxjs/toolkit';

// [{product: PRODUCTO COMPLETEO}, categorySlug: categorySlug, quantity: Q]

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const item = state.find((item) => item.product.slug === action.payload.product.slug);

      item ? (item.quantity = item.quantity + action.payload.quantity) : state.push(action.payload);
    },

    deleteItem(state, action) {
      return state.filter((item) => item.product.slug != action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, deleteItem } = actions;
export default reducer;
