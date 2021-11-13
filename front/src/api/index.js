import axios from 'axios';

function getRes(){
    const url = 'http://localhost:5000/'
    //const url = 'http://18.191.144.222:5000/'
    return axios.get(url);
}

function getUser(userId){
    const url = `http://localhost:5000/mycompany/commute/${userId}`
    //const url = 'http://18.191.144.222:5000/'
    return axios.get(url);
}

function getUserInfo(userId){
    const url = `http://localhost:5000/test/${userId}`
    return axios.get(url);
}

function register(user){
    const url = `http://localhost:5000/signup`
    return axios.post(url,user);
}

export {getRes,getUser,getUserInfo,register };

