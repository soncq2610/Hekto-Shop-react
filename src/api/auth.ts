import  axiosClient   from "./axiosClient" 

export interface IUser{
    id?:string,
    email?:string,
    name?:string,
    token?:string,
}

const authApi={
    login(){
        const url ='/users';
        return axiosClient.get("/users/1");
    }
}

export default authApi;