import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authUser, getError } from '../../store/Auth/AuthSlice';
import cls from "./Auth.module.scss"
import { Input } from '../../components/UI/Input/Input';
import PasswordVisible from '../../assets/img/password-visible.svg'
import PasswordHidden from '../../assets/img/password-hidden.svg'
import { classNames } from '../../helpers/classNames/classNames';
import { Button, ButtonThemes } from '../../components/UI/Button/Button';
import { FormError } from '../../components/UI/FormError/FormError';
import { useAppDispatch } from '../..';
import { signUpWithPassword } from '../../store/Auth/AuthThunk';
import { error } from 'console';
export interface IUserCredentialsEntry{
    value: string,
    error?: string | null,
    isVisible?:boolean
}
export interface IUserCredentials {
    email: IUserCredentialsEntry,
    password: IUserCredentialsEntry,
    repeatPassword: IUserCredentialsEntry
}

export const Auth = () => {

    const dispatch = useAppDispatch();
    const loginHandler = () => {
        dispatch(authUser())
    }
    const authError = useSelector(getError)
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true)
    const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
        email:{
            value:'',
        },
        password:{
            value:'',
            isVisible:false
        },
        repeatPassword:{
            value:'',
            isVisible:false
        },
    })
    
    const setUserCredentialsHandler = (
        key: keyof IUserCredentials, 
        field: keyof IUserCredentialsEntry, 
        value: string|null|boolean
    )=>{
        setUserCredentials(prevUserCredentials=>{
            return {
                ...prevUserCredentials,
                [key]: {
                    ...prevUserCredentials[key],
                    [field]: value,
                    ...(field==='value'
                        ? ( !value 
                            ? {error:'Required field'} 
                            : {error:null}
                        ) 
                        : {}
                    )
                }
            }
        })
    } 

    const submitForm = () => {
        let error = false;
        Object.keys(userCredentials).forEach((key)=>{
            let userCredentialsKey = key as keyof IUserCredentials
            if(!userCredentials[userCredentialsKey].value){
                setUserCredentialsHandler(userCredentialsKey, 'error', 'Required field')
                if( isLoginForm ? (userCredentialsKey!=='repeatPassword') : true ){
                    error = error||true
                }
            }else{
                setUserCredentialsHandler(userCredentialsKey, 'error', null)
            }
        })
        if(error){
            console.log('error');
        }else{
            console.log('success')
            // dispatch(signUpWithPassword(userCredentials))
        }
    }

    const toggleIsLoginForm = (event:React.MouseEvent) => {
        event.preventDefault();
        setIsLoginForm(prev=>!prev)
    } 


    return (
        <div className={cls.login} >
            <div className={cls.login__wrapper}>
                <div className={cls.login__logo}></div>
                <div className={cls.login__title}>Welcome to Reader!</div>
                <div className={cls.login__subtitle}>Exchange messages with your friends for free</div>
                <div className="form-block mt-[20px]">
                    <div className={`form-text form-left-padding`}>
                        Email address
                    </div>
                    <Input 
                        value={userCredentials.email.value} 
                        onChange={(value)=>{setUserCredentialsHandler('email', 'value', value)}} 
                    />
                    <FormError>{userCredentials.email.error}</FormError>
                </div>
                <div className="form-block">
                    <div className={`form-text form-left-padding`}>Password</div>
                    <div className={'form-input-wrapper'}> 
                        <Input 
                            value={userCredentials.password.value} 
                            onChange={(value)=>{setUserCredentialsHandler('password', 'value', value)}} 
                            type={userCredentials.password.isVisible ? 'text':'password'}
                        />
                        <div className="form-input-icon">
                            {
                                !userCredentials.password.isVisible
                                ?<img src={PasswordHidden} onClick={()=>{setUserCredentialsHandler('password', 'isVisible', !userCredentials.password.isVisible)}}/>
                                :<img src={PasswordVisible} onClick={()=>{setUserCredentialsHandler('password', 'isVisible', !userCredentials.password.isVisible)}}/>
                            }
                        </div>
                    </div>
                    <FormError>{userCredentials.password.error}</FormError>
                </div>
                {!isLoginForm && <div className="form-block">
                    <div className={`form-text form-left-padding`}>
                        Repeat password
                    </div>
                    <div className="form-input-wrapper"> 
                        <Input
                            value={userCredentials.repeatPassword.value} 
                            onChange={(value)=>{setUserCredentialsHandler('repeatPassword', 'value', value)}} 
                            type={userCredentials.repeatPassword.isVisible ? 'text':'password'}
                        />
                        <div className="form-input-icon">
                            {
                                !userCredentials.repeatPassword.isVisible
                                ?<img src={PasswordHidden} onClick={()=>{setUserCredentialsHandler('repeatPassword', 'isVisible', !userCredentials.repeatPassword.isVisible)}}/>
                                :<img src={PasswordVisible} onClick={()=>{setUserCredentialsHandler('repeatPassword', 'isVisible', !userCredentials.repeatPassword.isVisible)}}/>
                            }
                        </div>
                    </div>
                    <FormError>{userCredentials.repeatPassword.error}</FormError>
                </div>}

                <div className={`${cls.changeForm} form-left-padding mt-[30px]`} >
                    {isLoginForm ? 'Don\'t have an account?' : 'Have an account?'}
                    <a href="#" onClick={toggleIsLoginForm} className={`${cls.changeFormLink} ml-[10px]`}> 
                        {isLoginForm ? 'Sign in' : 'Sign Up.'}  
                    </a>
                </div>
                <FormError>{authError}</FormError>
                
                <Button className='mt-[30px]' onClick={submitForm}>{isLoginForm ? 'Sign in':'Sign up'}</Button>
                <Button className='mt-[10px]' theme={ButtonThemes.WITH_ICON}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={'cls.LgbsSe-Bz112c'}><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                    Log in with google account
                </Button>
            </div>
        </div>
    )
}
