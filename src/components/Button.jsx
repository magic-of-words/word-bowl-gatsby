import * as React from "react"
import "./Button.styles.sass"

const Button = (params) => {
    const { onClick, text } = params
    return <div className="button-container">
        <button disabled={params.disabled} onClick={onClick} className={`button ${params.disabled ? 'disabled' : ''}`}>
            <div className="button-text">{text}</div>
        </button>
    </div>
}

export default Button
