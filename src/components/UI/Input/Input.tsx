import React, { InputHTMLAttributes } from 'react'
import cls from "./Input.module.scss"
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?:string,
    onChange?: (value:string)=>void,
    value?:string
}
 
export const Input = (props: InputProps) => {
    const {
        className, 
        onChange,
        value,
        ...otherProps
    } = props;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }

    return (
        <input className={`${className||''} ${cls.input}`} value={value} onChange={onChangeHandler} {...otherProps} />
    )
}
