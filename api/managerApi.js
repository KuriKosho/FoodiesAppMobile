import tokenService from "@/service/token.service";
import axios from "axios";
import qs from "qs";

const managerApi = axios.create({
    baseURL: "http://10.0.2.2:3030",
    // baseURL: "http://192.168.1.118:3030",
    // responseType: "json",
    // withCredentials: true,
    headers: {
        "content-type": "multipart/form-data",
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat", allowDots: true });
      },
})

managerApi.interceptors.request.use(
    async function(config) {
      if (tokenService.checkTokenExists()) {
        const token = await tokenService.getToken();
        if (token) {
          config.headers.Authorization = "Bearer " + token;
          console.log("Sent with token successfully");
        }
      }
      if (config.method !== "get") {
        config.headers["content-type"] = "application/json";
        config.data = JSON.stringify(config.data);
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  managerApi.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        alert("Token hết hạn, vui lòng đăng nhập lại!");
        // Handle token expiration, redirect to login screen or renew token
        tokenService.removeToken();
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );
  
  export default managerApi;
  