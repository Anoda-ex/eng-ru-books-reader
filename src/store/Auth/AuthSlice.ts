import { StateSchema } from './../StateSchema';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthSchema } from './AuthSchema';
import { 
    checkAuthSubscribe, 
} from './AuthThunk'

const initialState = { 
    user: null,
    error: 'Error 1'
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
export const getError = (state: StateSchema) => state.auth.error
export default AuthSlice.reducer