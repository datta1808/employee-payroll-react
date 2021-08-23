import Axios from 'axios';
require('dotenv').config()
const BaseURL = "http://localhost:4000"


class User {

    login = (loginDetails) => {
        return Axios.post(`${BaseURL}/login`, loginDetails)
    }
    
    register = (user) => {
        return Axios.post(`${BaseURL}/register`, user)
    }
}

export default User;


