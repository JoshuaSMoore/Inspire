import { ProxyState } from "../AppState.js";

// @ts-ignore
export const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/' 
})