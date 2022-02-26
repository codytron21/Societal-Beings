import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://societal-being-backend.herokuapp.com/api/"
})