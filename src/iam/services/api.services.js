import http from "../../shared/services/http-common.js";
export class IamApiService{
    createUser(jsonUser){
        return http.post('/Glidego-iam/users',jsonUser)
    }
    findUserById(id){
        return http.get(`/Glidego-iam/users?id=${id}`);
    }
    findUserWithEmailAndPassword(email,password){
        return http.get(`/Glidego-iam/users?email=${email}&password=${password}`)
    }
    findUserWithEmail(email){
        return http.get(`/Glidego-iam/users?email=${email}`)
    }
}