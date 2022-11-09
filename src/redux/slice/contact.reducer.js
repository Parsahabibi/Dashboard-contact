import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "parsa", number: "0919", country: "iran", todo: [{ id: 1, title: "buy a ticket", status: false }] },
    { id: 2, name: "saman", number: "0912", country: "usa", todo: [{ id: 2, title: "buy a ball", status: false }] },
]

export const contactSlice = createSlice(
    {
        name: "contacts",
        initialState, 
        //reducers are actions in my products
        reducers:{
            deleteContact:(state , action)=>{
                // action => object{key} =>{payload}
                const {payload} = action;
                const index = state.findIndex(state => state.id === payload)
                state.splice(index , 1);
            },
            addContact:(state , action)=>{
                const {payload} = action ;
                state.push(payload);
            },
            updateContact:(state , action)=>{
                const {payload} = action ;
                const index = state.findIndex(state => state.id === payload.id)
                state[index] = payload ; 
            }
        }
    }
)

export const {deleteContact , addContact , updateContact} = contactSlice.actions

export default contactSlice.reducer


//for reducer always we passed the state and if we passed something action as parameter for function