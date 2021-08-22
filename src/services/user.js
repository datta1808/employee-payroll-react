import Axios from 'axios';
require('dotenv').config()
const BaseURL = "http://localhost:4000"


class User {

    login = (loginDetails) => {
        return Axios.post(`${BaseURL}/login`, loginDetails).then(res => {
            alert(res.data.message)
            console.log(res.data.message);
            }).catch(error => {
            alert("Invalid username or password");
        })
    }
    
    register = (user) => {
        return Axios.post(`${BaseURL}/register`, user)
    }
}

export default User;


