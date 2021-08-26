import Axios from 'axios';
require('dotenv').config()
const BaseURL = "http://localhost:4000"
const token = localStorage.getItem('token');

class Employee {

    addEmployeeDetails = (empDetails) => {
        console.log(empDetails)
        return Axios.post(`${BaseURL}/addEmployee`,empDetails,{
            headers:{
            'token': token
          }})
    }

    getEmployeeDetails = () => {
        return Axios.get(`${BaseURL}/getEmployees`)
    }
}

export default Employee;
