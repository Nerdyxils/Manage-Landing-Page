import React from "react";
import "./Button.css"


const STYLES = ['btn--primary', 'btn--outline', 'btn--small']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'white', 'red', 'green']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]

    return (
        <button className={`btn ${checkButtonStyle}
            ${checkButtonSize}
            ${checkButtonColor}`} 
            onClick={onClick} type={type}>{children}
        </button>
    )
}