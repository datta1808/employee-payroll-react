import { Paper, Grid, Avatar, TextField, Button } from "@material-ui/core";
import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useState, useEffect} from 'react';
import { Employee } from "../services/employee";
const employee = new Employee();

function UpdateEmployee({ emp, handleClose }) {
  const paperStyle = {
    padding: "0 15px 10px 20px",
    width: 500,
    margin: "50px auto",
  };

  const header = { margin: "3px" };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const buttonMargin = {
    marginTop: "10px",
    color: "gray",
    border: "2px solid",
  };

  const initialValues = {
    name: emp.name,
    email: emp.email,
    phoneNumber: emp.phoneNumber,
    department: emp.department,
    salary: emp.salary,
    company: emp.company
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
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
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      department: values.department,
      salary: values.salary,
      company: values.company
    };
    employee
      .updateEmployee(empDetails, emp._id)
      .then(res => {
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
            <AccountBoxIcon />
          </Avatar>
          <h2 style={header} data-testid="register">
            Update Employee
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
                data-testid="name"
                fullWidth
                name="name"
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
                varient="contained"
                fullWidth
                style={buttonMargin}
                onClick={handleClose}
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

export default UpdateEmployee;
