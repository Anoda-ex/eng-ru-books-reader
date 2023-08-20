import { StateSchema } from './../StateSchema';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SettingsSchema, appThemes } from './SettingsSchema';



const initialState = { 
    // theme: 
} as SettingsSchema

const SettingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme(state, action:{ type:string, payload:appThemes}) {
            console.log('SettingsSlice', action);
            
            state.theme = action.payload
        },
       
        
    },
})

export const { setTheme } = SettingsSlice.actions
export const getTheme = (state: StateSchema) => state.settings.theme
export default SettingsSlice.reducer