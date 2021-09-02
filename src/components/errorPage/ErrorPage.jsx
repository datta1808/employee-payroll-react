import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>OOPS! Page Not Found</h1>
            <NavLink to="/">Back To Homepage</NavLink>
        </div>
    )
}

export default ErrorPage
