import axios from "axios";
import { API } from "./getEnv";

console.log(API);
export const instance = () => axios.create({baseURL:API})