import Axios from 'axios';
require('dotenv').config()
const BaseURL = "http://localhost:4000"

class User {

    login = (loginDetails) => {
        return Axios.post(`${BaseURL}/login`, loginDetails).then(res => {
            alert(res.data.message)
            console.log(res.data.message);
            }).catch((error) => {
            console.log(error.message);
            alert(error.message)
        })
    }
    
    register = (user) => {
        return Axios.post(`${BaseURL}/register`, user).then(res => {
            alert(res.data.message)
            console.log(res.data.message);
        }).catch(error => {
            alert(error.message);
        })
    }
}

export default User;


