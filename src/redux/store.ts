import { configureStore, combineReducers, getDefaultMiddleware, createReducer} from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice"
import wishListReducer from "./slice/wishListSlice"

import cartReducer, { GET_TOTAL_AMOUNT } from "./slice/cartSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth','cart','wishList'],
  }

const rootReducer = combineReducers(
{
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
}
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck:false}) 
},)

store.dispatch(GET_TOTAL_AMOUNT)

export const persistor = persistStore(store)
export default store;