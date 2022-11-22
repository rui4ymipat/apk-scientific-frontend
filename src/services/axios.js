import axios from "axios";

// axios.defaults.baseURL =
//   "http://localhost:5000/apk-scientific/asia-southeast2";
axios.defaults.baseURL =
  "https://asia-southeast2-apk-scientific.cloudfunctions.net";
axios.defaults.withCredentials = false;

export default axios;
