import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import manProductSlices from "./slices/manSlices";
import womenSlices from "./slices/womenSlices";






export const store = configureStore({
    reducer:{
    cart:cartSlice,
    man: manProductSlices,
    women:womenSlices,
    }
})



