import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Employee } from "../../services/employee";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Grid } from '@material-ui/core';
import Snackbar from "@material-ui/core/Snackbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
const employee = new Employee();

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 20,
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
  width: 1300,
  margin: "10px 10px",
  elevation: 30,
};

export default function List({handleUpdate}) {
  const actionStyle = { color: "black", margin: "10px 0px 10px 15px"
 };

  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    getAllEmployees();
    // return () => {
    //   setEmployees([]); // This worked for me
    // };
  }, [employees]);


  const getAllEmployees = () => {
    employee.getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        toast.error("Some error occured...!");
      });
  };

  
  const deleteEmp = (empId) => {
    employee
      .deleteEmployee(empId)
      .then((res) => {
        setOpen(true);
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
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
          {employees.map(emp => (
            <StyledTableRow key={emp.id}>
              <StyledTableCell component="th" scope="employee">
                {emp.fullName}
              </StyledTableCell>
              <StyledTableCell align="right">{emp.email}</StyledTableCell>
              <StyledTableCell align="right">
                {emp.phoneNumber}
              </StyledTableCell>
              <StyledTableCell align="right">
                {emp.department}
              </StyledTableCell>
              <StyledTableCell align="right">{emp.salary}</StyledTableCell>
              <StyledTableCell align="right">
                {emp.company}
              </StyledTableCell>
              <Link
                onClick={() => {
                  deleteEmp(emp._id);
                }}
              >
                <DeleteIcon style={actionStyle} />
              </Link>
              <Link onClick={()=> {handleUpdate(emp._id);}} data-testid="update">
              <EditIcon style={actionStyle} />
              </Link>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Snackbar
                 anchorOrigin={{ vertical:'top', horizontal:'center' }}
                 open={open}
                 autoHideDuration={3000}
                onClose={handleClose}
                message="Emloyee deleted successfully!"
                  />
    <ToastContainer position="top-center" />
    </Grid>
  );
}
