import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useState, useEffect } from "react"
import { addContact, updateContact } from "../../redux/slice/contact.reducer"
import { useDispatch, useSelector } from 'react-redux'
import { emptyInput } from "../../data/add/addinformation"
import { formInput } from "../../data/add/addinformation"
import { useNavigate, Link, useParams } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const FormInputs = () => {
    const [add, setAdd] = useState(emptyInput)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contacts = useSelector(state => state.contacts)
    //by useSelector give all store and state is all data(products) and we . accessible a product
    const {ContactId} = useParams()
    //The useParams hook returns an object of key/value pairs of the dynamic params from the current URL
    //ContactId = parameter of router
    const [state, setState] = useState("add")

    const handleChange = e => {
        setAdd({ ...add, [e.target.name]: e.target.value })//2???
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(state === 'add') {
            dispatch(addContact(add))
        }else if (state === 'update') {
            dispatch(updateContact(add))
        }
        clearInput()
        navigate('/')
    }

    const clearInput = () => {
        setAdd(emptyInput)
    }

    useEffect(() => {
        return () => {
            clearInput()
        };
    }, [])
    useEffect(() => {
        console.log(ContactId)
        const c = contacts.filter(contact => contact.id === Number(ContactId))[0]
        if (c) {
            setAdd(c)
            setState('update')
        }
    }, []);

    return (
        <Grid p={2}>
            <Grid my={2}>
                <form onSubmit={handleSubmit}>
                    {formInput.map((item, index) => (
                        <TextField key={index} name={item.name} label={item.name} value={add[item.name]} onChange={handleChange} sx={{ mr: 5 }} />//1?? value and name
                    ))}
                    <Grid>
                        <Button variant='contained' color="success" sx={{ my: 2, mr: 5 }} type={"submit"} startIcon={< CheckCircleIcon />}>Submit</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default FormInputs