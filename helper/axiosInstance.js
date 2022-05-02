/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable quotes */
import axios from "axios";
import { getUserToken } from "./UserStorage"

let headers = {}


const axiosInstance = axios.create({
    headers,
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
