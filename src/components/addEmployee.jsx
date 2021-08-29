import { Paper, Grid, Avatar, TextField, Button } from "@material-ui/core";
import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Employee} from "../services/employee";
import { useHistory } from "react-router-dom";
const employee = new Employee();

function AddEmployee() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 450,
    margin: "100px auto",
  };
  const header = { margin: "3px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const buttonMargin = {
    marginTop: "10px",
    color: "gray",
    border: "2px solid",
  };
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    department: "",
    salary: "",
    company: "",
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
      company: values.company,
    };
    employee
      .addEmployee(empDetails)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setTimeout(() => {
      props.resetForm();
    }, 1000);
    window.location.pathname='/dashboard';
  };

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddIcon />
          </Avatar>
          <h2 style={header} data-testid="add">
            Add Employee
          </h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form data-testid="form">
              <Field
                as={TextField}
                data-testid="fullName"
                fullWidth
                name="fullName"
                label="Name"
                placeholder="Enter Your Name"
                helperText={
                  <ErrorMessage name="name">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
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
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
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
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
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
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
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
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
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
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Button
                type="submit"
                data-testid="submit"
                variant="contained"
                fullWidth
                style={buttonMargin}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}
export default AddEmployee;
