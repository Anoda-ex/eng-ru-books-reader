import React, {ReactNode} from 'react'
import ErrorIcon from '../../../assets/img/error-icon.svg'

interface IFormErrorProps {
    children: ReactNode
}
export const FormError = ({children}:IFormErrorProps) => {
    if(!children) return null
    return (
        <div className="form-error">
            <img src={ErrorIcon}/>
            <span>{children}</span>
        </div>
    )
}
