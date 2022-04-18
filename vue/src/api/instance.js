import axios from "axios";
// http://localhost:3000
const instance=axios.create({
    baseURL: 'https://todos.mirrorcl.ru',
    withCredentials: true,
    headers:{
        accept: 'application/json; charset=utf-8'
    }
});

export default instance;