import Axios from "axios";
require("dotenv").config();
const BaseURL = "http://localhost:4000";
const token = localStorage.getItem("token");

class Employee {
    
  addEmployee = (empDetails) => {
    console.log(empDetails);
    return Axios.post(`${BaseURL}/addEmployee`, empDetails, {
      headers: {
        token: token,
      },
    });
  };

  getEmployees = () => {
    return Axios.get(`${BaseURL}/getEmployees`, {
      headers: {
        token: token,
      },
    });
  };

  deleteEmployee = (empId) => {
    return Axios.delete(`"/deleteEmployee/"${empId}`, {
      headers: {
        token: token,
      },
    });
  };
}

export default Employee;
