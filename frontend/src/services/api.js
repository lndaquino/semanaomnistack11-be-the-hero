import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //endereço base da aplicação pra acessar backend
});

export default api;