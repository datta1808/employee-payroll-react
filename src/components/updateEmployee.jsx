import { Paper, Grid, Avatar, TextField, Button } from "@material-ui/core";
import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../scss/updateEmployee.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Employee } from "../services/employee";
const employee = new Employee();

function UpdateEmployee({ emp, handleClose }) {
  
  const initialValues = {
    fullName: emp.fullName,
    email: emp.email,
    phoneNumber: emp.phoneNumber,
    department: emp.department,
    salary: emp.salary,
    company: emp.company
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Minimum 2 alphabets required")
      .required("Required"),
    email: Yup.string().email("Enter valid email address").required("Required"),
    phoneNumber: Yup.number()
      .min(10, "Phone Number should be 10 digits long")
      .required("Required"),
    department: Yup.string().min(2, "Too short").required("Required"),
    salary: Yup.number().min(4, "Enter atleast 4 digit").required("Required"),
    company: Yup.string().min(2, "Too short").required("Required"),
  });

  const onSubmit = (values, props) => {
    const empDetails = {
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      department: values.department,
      salary: values.salary,
      company: values.company
    };
    employee
      .updateEmployee(empDetails, emp._id)
      .then(res => {
        toast.success("Employee Updated successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setTimeout(() => {
      props.resetForm();
    }, 1000);
  };

  return (
    <Grid>
      <Paper elevation={0} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatarStyle">
            <AccountBoxIcon />
          </Avatar>
          <h2 className="header" data-testid="update">
            Update Employee
          </h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form >
              <Field
                as={TextField}
                data-testid="fullName"
                fullWidth
                name="fullName"
                label="Name"
                placeholder="Enter Your Name"
                helperText={
                  <ErrorMessage name="fullName">
                    {(msg) => <div className="errorMessage">{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                data-testid="email"
                name="email"
                label="Email"
                placeholder="Enter Your email"
                helperText={
                  <ErrorMessage name="email">
                    {(msg) => <div className="errorMessage">{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                data-testid="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter Your phone number"
                helperText={
                  <ErrorMessage name="phoneNumber">
                    {(msg) => <div className="errorMessage">{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                data-testid="department"
                name="department"
                label="Department"
                placeholder="Enter Your Department"
                helperText={
                  <ErrorMessage name="department">
                    {(msg) => <div className="errorMessage">{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                data-testid="salary"
                name="salary"
                label="Salary"
                placeholder="Enter Your Salary"
                helperText={
                  <ErrorMessage name="salary">
                    {(msg) => <div className="errorMessage">{msg}</div>}
                  </ErrorMessage>
                }
              />

              <Field
                as={TextField}
                fullWidth
                data-testid="company"
                name="company"
                label="Company"
                placeholder="Enter Your Company Name"
                helperText={
                  <ErrorMessage name="company">
                    {(msg) => <div className="errorMessage">{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Button
                type="submit"
                data-testid="submit"
                varient="contained"
                fullWidth
                className="buttonMargin"
                onClick={handleClose}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <ToastContainer position="top-center" />
      </Paper>
    </Grid>
  );
}

export default UpdateEmployee;
