import axiosClient from "./axiosClient";

import { IProduct } from "../pages/Home";
const productApi = {

    getListProduct(){
        const url = "/haha"
        return axiosClient.get(url);
    },
    
    getProductById(id:any){
        const url = `/haha/${id}`;
        return axiosClient.get(url);

    }
}

export default productApi;