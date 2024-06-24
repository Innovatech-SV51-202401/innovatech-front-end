import axios from "axios";

const http = axios.create({
    baseURL : "https://my-json-server.typicode.com/Innovatech-SV51-202401",
    headers:{ 'Content-type':'application/json', 'Access-Control-Allow-Origin': '*'}
});

export default http;