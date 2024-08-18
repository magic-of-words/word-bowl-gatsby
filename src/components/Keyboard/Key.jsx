import * as React from "react"
import "./Keyboard.styles.sass"

const Key = (params) => {
    return <button onClick={params.onPress} className="key">
        {params.letter}
    </button>
}

export default Key
