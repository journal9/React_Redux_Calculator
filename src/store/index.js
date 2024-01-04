import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./calcStore";

const calcStore = configureStore(
    {
        reducer:{
            calc : calcReducer
        }
    }
)

export default calcStore