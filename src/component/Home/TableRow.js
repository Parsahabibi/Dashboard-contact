import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import rowTable from "../../data/Home/data"
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/slice/contact.reducer"
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
const TableRow = ({ contact }) => {
    const dispatch = useDispatch()
    const handleDelete = id => {
        dispatch(deleteContact(id))

    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} mt={5} sx={{ background: "lightblue" }} p={3}>
            <Grid container justifyContent={"space-evenly"} alignItems={"center"} >
                {rowTable.map(item =>
                    <Grid item key={item.id}>
                        <Typography>
                            {item.title.toUpperCase()} : {contact[item.title]}
                        </Typography>
                    </Grid>
                )}
                <Link to={`/updateContact/${contact.id}`} >
                    <Button variant='contained' color="secondary" startIcon={< CreateIcon />} sx={{ borderRadius: 1 }}>Update</Button>
                </Link>
                <Link to={`/singleContacts/${contact.id}`}>
                    <Button variant='contained' color="warning" sx={{ borderRadius: 1 }} startIcon={< InfoIcon />} >INFO</Button>
                </Link>
                <Button variant="contained" startIcon={< DeleteIcon />} color="error" onClick={() => handleDelete(contact.id)} sx={{ borderRadius: 1 }}>
                    Delete
                </Button>
            </Grid>
        </Grid>
    )
}

export default TableRow