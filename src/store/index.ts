import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import expressSlice from './express-slice'

const reducer = combineReducers({
    expressSlice
})

const store = configureStore({
    reducer,
})

export default store;