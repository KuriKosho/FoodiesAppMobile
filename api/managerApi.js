import axios from "axios";

export const managerApi = axios.create({
    baseURL: "http://10.0.2.2:3030",
    responseType: "json",
    withCredentials: true,
})