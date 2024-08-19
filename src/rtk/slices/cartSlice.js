import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchCart = createAsyncThunk(
    "CartSlice/fetchCart ",async()=>{
    const res = await fetch("http://localhost:3005/cart");
    const data = await res.json();
    return data ;
})

const CartSlice = createSlice({
    initialState: [],
    name: 'CartSlice',
    reducers:{
    clear:(state , action)=>{
    return []
    }
    },
    extraReducers:(builder)=>{
    builder.addCase(fetchCart.fulfilled ,(state , action)=>{
    return action.payload;
    })
    
    }
})


export const {clear} = CartSlice.actions;
export default CartSlice.reducer ;


