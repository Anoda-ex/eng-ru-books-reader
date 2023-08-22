import React, {ReactNode, ButtonHTMLAttributes} from 'react'
import cls from "./Button.module.scss"
export enum ButtonThemes {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    WITH_ICON = 'withIcon'
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ButtonThemes
}
export const Button = ({children, onClick, className, theme=ButtonThemes.PRIMARY}:IButtonProps) => {
  return (
    <button className={`${cls.button} ${className} ${cls[theme]}`} onClick={onClick}>
        {children}
    </button>
  )
}
