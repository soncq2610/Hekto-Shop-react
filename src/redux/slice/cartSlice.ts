import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IProduct } from "../../pages/Home";
 
const initialState ={
    cartData:[],
    productQuantity:0,
    totalCount:0,
    totalSubAmount:0,
    tax:0,
    totalAmountTax:0
    
}
const getlistCart = createAsyncThunk(
    'cart/getListCart',
   async (data,{rejectWithValue}) => {
    try{
        
    }catch{

    }
   }
)
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        SET_PRODUCT:(state:any,action) =>{

            const itemIndex = state.cartData.findIndex((item:IProduct)=>item.id === action.payload.id);
            console.log(itemIndex)
            if(itemIndex <0){
                const tempProduct = {...action.payload,productQuantity:1}
                state.cartData.push(tempProduct);
                state.totalCount +=1;
                toast.success("Add new product succesful..")
               
            }else{
                toast.error("Product already in cart! ")
            }
            
            // state.totalCount+=1;
        //  state.totalSubAmount+=state.cartData[state.cartData.length-1].salePrice;
        //  console.log('total: '+state.totalSubAmount);
        },
        REMOVE_PRODUCT:(state:any,action:any)=>{
            state.cartData= state.cartData.filter((item:IProduct)=>item.id !== action.payload.id)
            state.totalCount-=1;
            state.totalSubAmount = state.cartData.reduce((sum:any,item:IProduct)=>{
                return sum + item.salePrice;
            },state.totalSubAmount)
            console.log(state.cartData)
        },
       
        INCREASE_ITEM:(state:any,action:any) =>{
          const itemIndex = state.cartData.findIndex(
            (cartItem:any) => cartItem.id === action.payload.id
          );
          if(state.cartData[itemIndex].productQuantity >= 1){
            state.cartData[itemIndex].productQuantity+=1;
          }
        },
        DECREASE_ITEM:(state:any,action:any) =>{
            const itemIndex = state.cartData.findIndex(
                (cartItem:any) => cartItem.id === action.payload.id
              );
              if(state.cartData[itemIndex].productQuantity > 1){
                state.cartData[itemIndex].productQuantity-=1;
              }else{
             state.cartData= state.cartData.filter((item:IProduct)=>item.id !== action.payload.id)
             state.totalCount -=1;

              }
        },
        GET_TOTAL_AMOUNT:(state:any, action:any)=>{
            let {total,tax} =  state.cartData.reduce((cartTotal:any,cartItem:any)=>{
                const {salePrice, productQuantity} = cartItem;
                const itemTotal:number = (salePrice * productQuantity);
                cartTotal.total +=itemTotal;
                cartTotal.tax += (itemTotal*10/100).toFixed(2);
                return cartTotal;
            },{
                total:0,
                tax:0
            });
            state.totalSubAmount = total.toFixed(2);
            state.tax = tax;
            state.totalAmountTax= (total + total*10/100).toFixed(2);
        },
        CHECK_OUT_CART:(state,action) =>{
            state.cartData =[];
            state.productQuantity=0;
            state.totalCount=0,
            state.totalSubAmount=0,
            state.totalAmountTax=0
        }   
    }
})

export const {SET_PRODUCT,INCREASE_ITEM,DECREASE_ITEM,  REMOVE_PRODUCT,GET_TOTAL_AMOUNT,CHECK_OUT_CART} = cartSlice.actions;

// selectors
export const selectListCart = (state:any) => state.cart.cartData;
export const selectTotalCount = (state:any) => state.cart.totalCount;
export const selectAmount = (state:any) => state.cart.totalSubAmount;
export const selectTax = (state:any) => state.cart.tax;
export const selectAmountTax = (state:any) => state.cart.totalAmountTax;


export default cartSlice.reducer;