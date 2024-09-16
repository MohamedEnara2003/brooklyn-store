import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchWomanProduct = createAsyncThunk(
    "womenProductSlices /fetchWomanProduct",async()=>{
    const res = await fetch("https://brooklyn-vercel.vercel.app/Women");
    const data = await res.json();
    return data
})

const womenProductSlices = createSlice({
    initialState: [],
    name: 'womenProductSlices ',
    reducers:{
    removeAll:(state , action)=>{
        return []
    }
    },
    extraReducers:(builder)=>{
    builder.addCase(fetchWomanProduct.fulfilled ,(state , action)=>{
    return action.payload
    })
    }
})

export const {removeAll} = womenProductSlices.actions;
export default womenProductSlices.reducer;