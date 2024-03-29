import axios from "axios"
import { getToken } from "../utilities/local-storage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL //|| "http://localhost:8899"
axios.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token} `
        }
        return config;
    },
    error => Promise.reject(error)
)



export default axios;
