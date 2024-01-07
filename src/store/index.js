import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./calcStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key:'root',
    storage
}

// const rootReducer = combineReducers({ 
//     user: userReducer,
//     notes: NotesReducer
//   })

const persistedReducer = persistReducer(
    persistConfig,
    calcReducer
)

export const calcStore = configureStore(
    {
        reducer:{
            calc : persistedReducer
        }
    }
)

export const persistor = persistStore(calcStore)

export default calcStore