import { StateSchema } from './../StateSchema';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthSchema } from './AuthSchema';



const initialState = { 
    user: null
} as AuthSchema

const AuthSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        authUser(state) {
            state.user = {
                id: '123'
            }
        },
        logoutUser(state) {
            state.user = null
        },
        
    },
})

export const { authUser, logoutUser } = AuthSlice.actions
export const getUser = (state: StateSchema) => state.auth.user
export default AuthSlice.reducer