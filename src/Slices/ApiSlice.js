import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItemsInCart: (state, action) => {
      const newProductItem = action.payload;
      const isAlreadyInCart = state.items.some(
        (item) => item.id === newProductItem.id
      );
      if (!isAlreadyInCart) {
        state.items.push(newProductItem);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
  },
});

export const { addItemsInCart, clearCart, removeProduct } = ApiSlice.actions;
export default ApiSlice.reducer;
