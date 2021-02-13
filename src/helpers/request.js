import axios from "axios";

const request = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { Authorization: "Client-ID ubqRtUaT97rSSpHD6ZbHsX96g1STBeZlKA_qMF4wn-c" },
});

export default request;