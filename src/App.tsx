import React, {useEffect} from 'react';
import './App.css';
import { AppRouter } from './router/AppRouter';
import { useDispatch } from 'react-redux';
import { checkAuthSubscribe } from './store/Auth/AuthThunk';
import { useAppDispatch } from '.';



export const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(checkAuthSubscribe())
    }, [])
    
    return (
        <div >
            <AppRouter></AppRouter>
        </div>
    );
}

