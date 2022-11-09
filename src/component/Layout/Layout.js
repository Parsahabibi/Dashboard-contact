import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ButtonLayout from './ButtonLayout'

const Layout = () => {
    return (
        <Grid>
        <Grid>header</Grid>
            <Outlet/>
            <ButtonLayout />
            <Grid>footer</Grid>
        </Grid>
    )
}

export default Layout