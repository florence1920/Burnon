import axios from 'axios';

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

function getJob(goal){
    const url = `http://localhost:5000/recommend`
    return axios.get(url,{
        params:{
            goal 
        }
    });
}

export {register,login, getUserBio, getJob};

