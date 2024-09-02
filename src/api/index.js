import axios from "axios";

const baseUrl = "http://192.168.143.51";
const port = "3002";

const baseOption = {
  baseURL: `${baseUrl}:${port}`,
  headers: {
    "Content-Type": "application/json",
  },
};

const authApi = axios.create(baseOption);

export { authApi };

// path 관련 정보
const serviceUrl = "todos";
const userId = 0;

export { serviceUrl, userId };
