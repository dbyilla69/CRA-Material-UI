import http from '../http-common';

const getAll=()=>{
    return http.get("/joke");
}

export default {
    getAll
}