import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '../store/Settings/SettingsSlice';
import { appThemes } from '../store/Settings/SettingsSchema';
interface useThemeReturn {
    toggleTheme: (newTheme: appThemes)=>void
}
export const useTheme = (): useThemeReturn => {
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);

    const toggleTheme = (newTheme: appThemes) => {
        localStorage.setItem('app-theme', newTheme)
        dispatch(setTheme(newTheme))
    }

    useEffect(()=>{
        let newTheme = localStorage.getItem('app-theme');
        if(newTheme){
            toggleTheme(newTheme as appThemes)
        }
    },[])

    useEffect(()=>{
        document.body.className = theme 
    },[ theme ])

    return {
        toggleTheme
    }
}