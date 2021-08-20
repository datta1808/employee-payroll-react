import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'

const Signup = () => {

    const paperStyle = {padding:'30px 20px', width:500, margin:"150px auto"}
    const headerStyle = {margin: 0}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const btnStyle = {margin: '20px 0'}

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Registration Form</h2>
                    <Typography variant='caption'>Please fill this from to create an account!</Typography>
                </Grid>

                <form>
                    <TextField fullWidth label='First Name'/>
                    <TextField fullWidth label='Last Name'/>
                    <TextField fullWidth label='Email'/>
                    <TextField fullWidth label='Password'/>
                    <TextField fullWidth label='Confirm Password'/>
                    <Button type='submit' variant='contained' color='primary' style={btnStyle}>SIGN UP</Button>
                </form>

                <Typography>
                    Already have an account?
                    <Link to="/">
                        Login
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;
