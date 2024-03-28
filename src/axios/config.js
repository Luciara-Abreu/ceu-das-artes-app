import axios from "axios";


export const torneioFetch = axios.create({
    baseURL: 'http://localhost:3001'
});

