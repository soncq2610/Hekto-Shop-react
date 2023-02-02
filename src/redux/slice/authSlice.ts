import { createSlice,createAsyncThunk,  PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../api/auth';
import authApi from '../../api/auth'
const initialState = {

    userData:{
      email: null,
      userName:null,
      token:null
    }
    
}
const login = createAsyncThunk(
    'auth/login',
   async (userInfo,{rejectWithValue}) => {
      try{
        const res = await authApi.login();
        return res.data;
      }catch(error){
        return rejectWithValue(error)
      }
   }
)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_lOGOUT_USER: (state, action) =>{
  
      state.userData = action.payload;
  }
  },
  extraReducers(builder) {
    builder.addCase(
      login.fulfilled,
      (state:any,action: PayloadAction)=>{
        const payload = action.payload;
        console.log(action.payload)
        state.userData = payload;
      }
    )
  },
});
// Action
export const {SET_lOGOUT_USER} = authSlice.actions
export {login};
//Selectors

export const selectEmail = (state:any) => state.auth.userData.email
export const selectUserName = (state:any) => state.auth.userData.userName
export const selectUserToken = (state:any) => state.auth.userData.token

//Recducer
export default authSlice.reducer