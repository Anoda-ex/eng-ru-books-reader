import React from 'react'
import { useDispatch } from 'react-redux';
import { authUser } from '../store/Auth/AuthSlice';

export const Auth = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authUser())
    }
    return (
        <div>
            Auth
            <div>
                <button onClick={loginHandler}>login</button>
            </div>
        </div>
    )
}
