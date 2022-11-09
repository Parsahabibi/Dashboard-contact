// import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material'
import {React} from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import { lightBlue } from '@mui/material/colors';
const HomeHeader = () => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid container justifyContent={"space-evenly"} mt={5} mb={10} alignItems={"center"}>
      <Typography fontSize={50} color="secondary">Contact Dashboard</Typography>
      <Link to={"/addContact"}>
        <Button variant='contained' color="success" startIcon={< AddIcon />}>Add Contact</Button>
      </Link>
    </Grid>
  )
}

export default HomeHeader