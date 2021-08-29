// import React from 'react';
// import {useState, useEffect} from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import { Grid } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// import {Employee} from '../services/employee'
// const employee = new Employee()

import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Employee } from "../services/employee";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Snackbar from "@material-ui/core/Snackbar";

import { Link } from "react-router-dom";
const employee = new Employee();

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const tableStyle = {
  padding: "30px 20px",
  width: 1000,
  margin: "40px 30px",
  elevation: 30,
};

export default function List({handleUpdate}) {
  const actionStyle = { color: "black", margin: "10px 0px 10px 15px" };

  const [employees, setEmployees] = useState([]);
  const classes = useStyles();

  const getEmployees = () => {
    employee
      .getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        alert('Some error occurred!')
        console.log(error.message);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmp = (empId) => {
    employee
      .deleteEmployee(empId)
      .then((res) => {
        console.log(res);
        getEmployees();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // return (
  //    <Container>
  //      <Grid container spacing={3} direction="row">
  //       {employees.map(emp=>(
  //         <Grid item key={emp._id} xs={12} md={12} lg={4}>
  //           <Card elevation={2}>
  //               <CardContent align='left'>
  //                   <Typography>
  //                      Name: {emp.name}
  //                   </Typography>
  //                   <Typography>
  //                      Email: {emp.email}
  //                   </Typography>
  //                   <Typography>
  //                      Phone Number: {emp.phoneNumber}
  //                   </Typography>
  //                   <Typography>
  //                      Department: {emp.department}
  //                   </Typography>
  //                   <Typography>
  //                      Salary: {emp.salary}
  //                   </Typography>
  //                   <Typography>
  //                      Company: {emp.company}
  //                   </Typography>
  //                   <IconButton onClick={()=>{deleteEmp(emp._id)}}>
  //                       <DeleteOutlineOutlinedIcon/>
  //                   </IconButton>
  //                   <IconButton onClick={()=> {handleUpdate(emp._id)}}>
  //                       <EditIcon/>
  //                   </IconButton>
  //               </CardContent>
  //           </Card>
  //           </Grid>
  //       ))}
  // <Snackbar
  //   anchorOrigin={{ vertical: "top", horizontal: "center" }}
  //   open={open}
  //   autoHideDuration={2000}
  //   onClose={handleClose}
  //   message="Emloyee deleted successfull!!!"
  // />;
  //      </Grid>
  //    </Container>
  // );

  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
            <StyledTableCell align="right">Company</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <StyledTableRow key={employee._id}>
              <StyledTableCell component="th" scope="employee">
                {employee.fullName}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.email}</StyledTableCell>
              <StyledTableCell align="right">
                {employee.phoneNumber}
              </StyledTableCell>
              <StyledTableCell align="right">
                {employee.department}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.salary}</StyledTableCell>
              <StyledTableCell align="right">
                {employee.company}
              </StyledTableCell>
              <Link
                onClick={() => {
                  deleteEmp(employee._id);
                }}
              >
                <DeleteIcon style={actionStyle} />
              </Link>
              <Link onClick={()=> {handleUpdate(employee._id);}} data-testid="update">
              <EditIcon style={actionStyle} />
              </Link>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
