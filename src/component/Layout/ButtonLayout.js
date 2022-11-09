import { Grid , Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ButtonLayout = () => {
    return (
        <Grid ml={2}>
            <Link to={"/"}>
                <Button variant='contained' color='error' startIcon={< ArrowBackIcon />}>Back</Button>
            </Link>
        </Grid>
    )
}

export default ButtonLayout