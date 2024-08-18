import * as React from "react"
import "./Keyboard.styles.sass"
import Key from "./Key"
import BackspaceKey from "./BackspaceKey"

const VowelRow = (params) => {
    const keys = []
    for (const key of params.keys) {
        keys.push(<Key key={key} onPress={() => params.handleKeyPress(key)} letter={key}/>)
    }
    keys.push()
    return <div className="key-row">
        {keys}
        <BackspaceKey onPress={() => params.handleKeyPress('Backspace')}/>    
    </div>
}

export default VowelRow
