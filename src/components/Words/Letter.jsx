import * as React from "react"
import "./Words.styles.sass"

const Letter = (params) => {
    let className = 'letter'
    if (params.empty) className = className + ' empty'
    if (params.correct) className = className + ' correct'
    return <div className={className}>
        {params.letter}
    </div>
}

export default Letter
