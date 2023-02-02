import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import productApi from "../../api/products";
import authSlice from "./authSlice";

const initialState = {
    productData:[]
}

const getListProduct = createAsyncThunk(
    'product/getListProduct',
   async (data,{rejectWithValue}) => {
    try{
        const res = await productApi.getListProduct();
        return res.data;
    
    }catch(error:any){
        return rejectWithValue(error.res.data);
    }
   }
)

const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(
            getListProduct.fulfilled,
            (state:any,action:PayloadAction) =>{
                const payload = action.payload;
                state.productData = payload;
            }
        )
    },
});
//action
export {getListProduct};

//selector
export const selectListProduct = (state:any) => state.product.productData

export default productSlice.reducer;