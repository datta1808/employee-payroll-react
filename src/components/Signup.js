import React from 'react'
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'

const Signup = () => {
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlinedIcon />
                    </Avatar>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default signup
