import axios from "axios";
import { config } from "zod";

const api = axios.create({
    baseURL:  "https://mt-todolist-backend.onrender.com"
})

api.interceptors.request.use(
    (config)=>{
        const token = useUserstore.getState().token
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default api