import { configureStore } from "@reduxjs/toolkit";

const calcStore = configureStore(
    {
        reducer:{
            calculator : calcSlice.reducer
        }
    }
)

export default calcStore