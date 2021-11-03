import axios from 'axios';

function getRes(){
    const url = 'http://localhost:5000/'
    //const url = 'http://18.191.144.222:5000/'
    return axios.get(url);
}

export {getRes};