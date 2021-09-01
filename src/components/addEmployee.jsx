import { Paper, Grid, Avatar, TextField, Button } from "@material-ui/core";
import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../scss/addEmployee.scss";
import Snackbar from "@material-ui/core/Snackbar";
import { Employee } from "../services/employee";
const employee = new Employee();

function AddEmployee() {

  const [open, setOpen] = React.useState(false);

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
        setOpen(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
      setTimeout(() => {
        props.resetForm();
      }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Paper elevation={0} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatarStyle">
            <PersonAddIcon />
          </Avatar>
          <h2 className="header" data-testid="add">
            Add Employee
          </h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form data-testid="form">
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
                variant="contained"
                fullWidth
                className="buttonMargin"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
      <Snackbar
                 anchorOrigin={{ vertical:'top', horizontal:'center' }}
                 open={open}
                 autoHideDuration={3000}
                onClose={handleClose}
                message="Emloyee Added successfully!"
                  />
    </Grid>
  );
}
export default AddEmployee;
