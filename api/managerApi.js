import axios from "axios";

export const managerApi = axios.create({
    // baseURL: "http://10.0.2.2:3030",
    baseURL: "http://192.168.1.9:3030",
    responseType: "json",
    withCredentials: true,
})