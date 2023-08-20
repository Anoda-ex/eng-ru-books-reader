import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../store/Auth/AuthSlice';
import cls from "./Sidebar.module.scss"
import { useTheme } from '../../../hooks/useTheme';
import { appThemes } from '../../../store/Settings/SettingsSchema';
export const Sidebar = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logoutUser())
    }
    const { toggleTheme } = useTheme()
    return (
        <div className={cls.sidebar}>
            Sidebar
            <div> 
                <button onClick={logoutHandler}>Logout User</button>
            </div>
            <div> 
                <button onClick={()=>{toggleTheme(appThemes.LIGHT)}}>Light theme</button>
            </div>
            <div> 
                <button onClick={()=>{toggleTheme(appThemes.DARK)}}>Dark theme</button>
            </div>
            <div> 
                <button onClick={()=>{toggleTheme(appThemes.BOOK)}}>Book theme</button>
            </div>
        </div>
    )
}
