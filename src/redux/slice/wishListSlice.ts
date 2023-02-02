import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../pages/Home";
import { toast } from "react-toastify";
import { REMOVE_PRODUCT } from "./cartSlice";

const initialState={
    wishListData:[]
}

const wishListSlice = createSlice({
    name:"whistList",
    initialState,
    reducers:{
        SET_WISHLIST:(state:any,action)=>{
            const itemIndex = state.wishListData.findIndex((item:IProduct)=>item.id === action.payload.id);
            if(itemIndex<0){
                const product = action.payload;
                state.wishListData.push(product)
                toast.success("Add product to wish list succesful..")
            } else{
                state.wishListData = state.wishListData.filter((item:IProduct)=> item.id !== action.payload.id)
                toast.error("Remove product from wish list!")
            }
         
        },
        REMOVE_WiSHLIST:(state:any,action)=>{
            state.wishListData = state.wishListData.filter((item:IProduct)=> item.id !== action.payload.id)
        }

    },
}
    
)

export const {SET_WISHLIST,REMOVE_WiSHLIST} = wishListSlice.actions;

export const selectWishList = (state:any) => state.wishList.wishListData;

export default wishListSlice.reducer;