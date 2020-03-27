import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.12:3333' // configura a URL pegando do expo (em cima do QRcode) e a porta do node 3333
});

export default api;