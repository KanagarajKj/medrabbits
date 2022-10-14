import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState
})

export default cartSlice.reducer;