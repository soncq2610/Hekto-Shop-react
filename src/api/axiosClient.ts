import axios from 'axios';
import store from '../redux/store';

const axiosClient = axios.create({
    baseURL:"https://639bca5531877e43d6935596.mockapi.io/hektoAPI/"
})

export default axiosClient;