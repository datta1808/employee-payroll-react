import Axios from "axios";
require("dotenv").config();
let token = localStorage.getItem("token");

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const header = {
  headers: {
    'token': token
  },
};

export class Employee {
  addEmployee = (empDetails) => {
    return Axios.post(`/addEmployee`, empDetails, header);
  };

  getEmployees = () => {
    return Axios.get(`/getEmployees`, header);
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