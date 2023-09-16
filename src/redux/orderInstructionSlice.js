import { createSlice } from '@reduxjs/toolkit';

const orderInstructionSlice = createSlice({
  name: 'orderInstruction',
  initialState: '',
  reducers: {
    addInstruction(state, action) {
      return (state = action.payload);
    },
  },
});

const { actions, reducer } = orderInstructionSlice;
export const { addInstruction } = actions;
export default reducer;
