import axios from "axios";
import { control } from "../utils/control";
 

const baseUrl = 'http://localhost:8090/'
const timeout = 15000;
export const userConfig = axios.create({
    baseURL: baseUrl,
    timeout: timeout
})


export const siteConfig = axios.create({
    baseURL: baseUrl,
    timeout: timeout,
   headers: { 'Authorization': 'Bearer ' + control()?.jwt }
})