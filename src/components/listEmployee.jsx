import React from 'react';
import {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton'; 
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {Employee} from '../services/employee'
const employee = new Employee()

export default function SimpleCard({handleUpdate}) {

  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    employee.getEmployees().then(res => {
      setEmployees(res.data)
  }).catch(error => {
      console.log(error.message);
  })
  }

  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmp = (empId) => {
    employee.deleteEmployee(empId).then(res => {
        alert("Employee Deleted!!!")
        getEmployees();
    }).catch(error => {
        console.log(error.message);
    })
}


  return (
     <Container>
       <Grid container spacing={3} direction="row">
        {employees.map(emp=>(
          <Grid item key={emp._id} xs={12} md={12} lg={4}>
            <Card elevation={2}>
                <CardContent align='left'>
                    <Typography>
                       Name: {emp.name}
                    </Typography>
                    <Typography>
                       Email: {emp.email}
                    </Typography>
                    <Typography>
                       Phone Number: {emp.phoneNumber}
                    </Typography>
                    <Typography>
                       Department: {emp.department}
                    </Typography>
                    <Typography>
                       Salary: {emp.salary} 
                    </Typography>
                    <Typography>
                       Company: {emp.company} 
                    </Typography>
                    <IconButton onClick={()=>{deleteEmp(emp._id)}}> 
                        <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                    <IconButton onClick={()=> {handleUpdate(emp._id)}}>
                        <EditIcon/>
                    </IconButton>
                </CardContent>
            </Card>
            </Grid>
        ))}
       </Grid>
     </Container>  
  );
}