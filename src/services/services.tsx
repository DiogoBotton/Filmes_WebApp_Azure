import axios from 'axios';

const api = axios.create({ baseURL: "https://filmesdb.azurewebsites.net/api/" })
//const api = axios.create({ baseURL: "https://filmesdb.azurewebsites.net/api/" })

export default api;