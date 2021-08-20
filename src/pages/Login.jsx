import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Typography, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {

    const paperStyle = {padding:20, height:'50vh', width:450, margin:'100px auto'}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const btnstyle = {margin: '16px 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' fullWidth required/>
                <TextField label='Password' type='password' fullWidth required/>

                <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Sign In</Button>
                
                <Typography>
                    New User?
                    <Link to="/signup">
                        Create Account
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
