import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchManProduct = createAsyncThunk(
    "manProductSlices/fetchManProduct",async()=>{
    const res = await fetch("http://localhost:3005/MAN");
    const data = await res.json();
    return data
})

const manProductSlices = createSlice({
    initialState: [],
    name: 'manProductSlices',
    reducers:{
    removeAll:(state , action)=>{
        return []
    }
    },
    extraReducers:(builder)=>{
    builder.addCase(fetchManProduct.fulfilled ,(state , action)=>{
    return action.payload
    })
    }
})

export const {removeAll} = manProductSlices.actions;
export default manProductSlices.reducer;