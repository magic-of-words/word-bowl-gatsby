import * as React from "react"
import "./Keyboard.styles.sass"
import Key from "./Key"

const KeyRow = (params) => {
    const keys = []
    for (const key of params.keys) {
        keys.push(<Key key={key} onPress={() => params.handleKeyPress(key)} letter={key}/>)
    }
    return <div className="key-row">{keys}</div>
}

export default KeyRow
