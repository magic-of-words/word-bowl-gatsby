import * as React from "react"
import "./Keyboard.styles.sass"
import VowelRow from "./VowelRow"
import KeyRow from "./KeyRow"
import { vowels, consonants } from '../../constants/alphabet'

const Keyboard = (params) => {
    const { handleKeyPress } = params
    return <div className="keyboard">
        <VowelRow keys={vowels} handleKeyPress={handleKeyPress}/>
        <KeyRow keys={consonants.slice(0,7)} handleKeyPress={handleKeyPress}/>
        <KeyRow keys={consonants.slice(7,14)} handleKeyPress={handleKeyPress}/>
        <KeyRow keys={consonants.slice(14)} handleKeyPress={handleKeyPress}/>
    </div>
}

export default Keyboard
