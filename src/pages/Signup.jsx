import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import User from '../services/user.js';
const  userObject = new User();


const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 500, margin: "200px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "20px 0" };

  // describes the initial values of the respective form fields
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  // This handles what happens after the user submits
  const onsubmit = (values, props) => {
    const user = {
        "firstName": values.firstName,
        "lastName": values.lastName,
        "email": values.email,
        "password": values.password,
    }
    userObject.register(user).then(res => {
      if(res.data.success === true){
          toast.success(res.data.message);
      } else {
          toast.error('Some error occurred...!');
      }
  }).catch(error => {
      toast.error('Registration failed...!');
  });        
    setTimeout(()=>{
        props.resetForm();
        props.setSubmitting(false);
    },1000);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First Name must have alteast two alphabets")
      .matches(/^[a-zA-Z]{2,}$/, "First Name must contain alphabets only")
      .required("Required"),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]{3,}$/, "Last Name contain alphabets only")
      .required("Required"),
    email: Yup.string().email("Enter a valid email id").required("Required"),
    password: Yup.string()
      .min(8, "Password must be of atleast 8 characters")
      .required("Required"),
  });

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountBoxIcon />
          </Avatar>
          <h2 style={headerStyle}>Registration Form</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this from to create an account!
          </Typography>
        </Grid>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onsubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="firstName"
                label="First Name"
                helperText={<ErrorMessage name="firstName" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="lastName"
                label="Last Name"
                helperText={<ErrorMessage name="lastName" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                helperText={<ErrorMessage name="password" />}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                style={btnStyle}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign Up"}
              </Button>

              <Typography>
                Already have an account?
                <Link to="/">Login</Link>
              </Typography>
              <ToastContainer
              position="top-center" 
              />
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
