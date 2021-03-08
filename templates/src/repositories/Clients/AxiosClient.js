import axios from 'axios';
import store from '@/store'

const bearerToken = store.state.token;
const base_url = process.env.VUE_APP_BASE_API_URL;

export const baseDomain = base_url;

export const baseURL = `${base_url}/api`; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE

console.log(base_url, 'baseurl');
console.log(process.env.VUE_APP_BASE_API_URL, 'baseurl');

export default axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${bearerToken}` 
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': '*',
    // 'Access-Control-Allow-Methods': ['POST', 'PATCH', 'PUT', 'GET', 'OPTIONS'],
    // 'Access-Control-Max-Age': 86400,
    // 'Vary': ['Accept-Encoding', 'Origin'],
    // 'Connection': ['Keep-Alive']
  },
});
