import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
// import { AccessAlarm , ThreeDRotation } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import rowTable from "../../data/Home/data"
import { useSelector, useDispatch } from 'react-redux'
import TableRow from './TableRow';
const TableContact = () => {
    const contacts = useSelector(state => state.contacts)//state is all of the store and when i selected (.) choose the product
    //use selector for redux state
    return (
        <Grid container>
            {contacts.map((contact , index) => <TableRow contact={contact} key={index}/>)}
        </Grid>
    )
}

export default TableContact