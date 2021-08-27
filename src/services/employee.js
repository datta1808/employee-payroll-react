import Axios from "axios";
require("dotenv").config();
const BaseURL = "http://localhost:4000";
const token = localStorage.getItem("token");

const header = {
  headers: {
    token: token,
  },
};

export class Employee {
  addEmployee = (empDetails) => {
    console.log(empDetails);
    return Axios.post(`${BaseURL}/addEmployee`, empDetails, header);
  };

  getEmployees = () => {
    return Axios.get(`${BaseURL}/getEmployees`, header);
  };

  deleteEmployee = (empId) => {
    return Axios.delete(`/deleteEmployee/${empId}`, header);
  };

  getEmployeeById = (empId) => {
    return Axios.get(`/getEmployee/${empId}`, header);
  };

  updateEmployee = (empDetails, empId) => {
    return Axios.put(`/updateEmployee/${empId}`, empDetails, header);
  };
}
