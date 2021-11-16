import axios from 'axios';

function getRes(){
    const url = 'http://localhost:5000/'
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
    const url = `http://localhost:5000/user/signup`
    return axios.post(url,user);
}

function login(user){
    const url = `http://localhost:5000/user/login`
    return axios.post(url,user,{withCredentials: true});
}

function getUserBio(userId){
    const url = `http://localhost:5000/user/modify`
    return axios.get(url,{
        params:{
            id : userId
        }
    });
}

export {getRes,getUser,getUserInfo,register,login, getUserBio};

