import axiosClient from "./axiosClient";

const cartApi ={
    getlistCart(){
        const url ="/cart"
        return axiosClient.get(url);
    }
}

export default cartApi;