import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactSlice from "./slice/contact.reducer"

const persistConfig = {
  key: 'root',//What name should it be stored in local storage?
  storage,
}

const allReducers = combineReducers({
  contacts: contactSlice,
})

const persistReducers = persistReducer(persistConfig , allReducers)

export const store = configureStore({
  //reducer are my products
  reducer: persistReducers
})

export const persitor  = persistStore(store)