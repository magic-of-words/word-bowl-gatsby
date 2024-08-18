import * as React from "react"
import "./Keyboard.styles.sass"

const Key = (params) => {
    return <button onClick={params.onPress} className="key">
        <div className='key-text'>
            {params.letter}
        </div>
    </button>
}

export default Key
