import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import {useState , useEffect} from "react"
import { useSelector } from 'react-redux'
import { SingleContactsData } from '../../data/SingleContactsData/SingleContactsData'
const SingleContacts = () => {

    const{ContactId} = useParams()

    const contacts = useSelector(state => state.contacts)

    const[contact , setContact] = useState({})

    useEffect(() => {
        return () => {
            setContact(contacts.filter(item => item.id === Number(ContactId))[0])
        };
    }, [])

  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"} sx={{background:"gold" , borderRadius:1}}>
        {SingleContactsData.map(item => (
            <Grid key={item.id} p={0 , 2}>
            {item.name.toUpperCase()} : {contact[item.name]}
            </Grid>
        ))}
    </Grid>
  )
}

export default SingleContacts