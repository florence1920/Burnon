import axios from 'axios';

function getRes(){
    const url = 'http://localhost:5000/'
    return axios.get(url);
}

export {getRes};