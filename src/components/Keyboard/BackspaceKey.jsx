import * as React from "react"
import "./Keyboard.styles.sass"

const BackspaceKey = (params) => {
    return <button onClick={params.onPress} className="key">
        <svg width="27" height="42" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="9">
            <path d="M 10 25 L 40 5 L 90 5 L 90 45 L 40 45 L 10 25 Z" />
            <line x1="60" y1="15" x2="80" y2="35" />
            <line x1="80" y1="15" x2="60" y2="35" />
        </svg>
        <span className="visually-hidden">Backspace</span>
    </button>
}

export default BackspaceKey
