import * as React from "react"
import "./Words.styles.sass"

const Letter = (params) => {
    return <div className={`letter ${params.color} ${params.empty ? 'empty' : ''}`}>
        {params.letter}
    </div>
}

export default Letter
