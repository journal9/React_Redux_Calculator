import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcStore";

const calcStore = configureStore(
    {
        reducer:{
            calculator : calcSlice.reducer
        }
    }
)

export default calcStore