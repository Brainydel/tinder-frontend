import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder45.herokuapp.com",
});
export default instance;
