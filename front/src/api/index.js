import axios from 'axios';

function getRes(){
    const url = 'http://http://18.191.144.222:5000//'
    return axios.get(url);
}

export {getRes};