import Axios from 'axios';
require('dotenv').config()

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;


class User {

    login = (loginDetails) => {
        return Axios.post(`/login`, loginDetails)
    }
    
    register = (user) => {
        return Axios.post(`/register`, user)
    }
}

export default User;


