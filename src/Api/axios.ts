import axios from "axios";

const customAxios = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
    
})
export default customAxios