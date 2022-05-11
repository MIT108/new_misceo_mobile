/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable quotes */
import axios from "axios";
import { getUserToken } from "./UserStorage"
import { URL } from '@env'

let headers = {}


const axiosInstance = axios.create({
    headers:{
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    }
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getUserToken();
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject("Error: " + error);
    }
);

export default axiosInstance;
