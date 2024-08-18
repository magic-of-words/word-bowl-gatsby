import * as React from "react"
import "./Words.styles.sass"
import Letter from "./Letter"

const CheckWord = (params) => {
    const { secretWord } = params
    const letters = []
    for (let i = 0; i < 5; i++) {
        letters.push(<Letter
            key={`word-${params.word}letter-${i}`}
            letter={params.letters.charAt(i)}
            correct={secretWord && params.letters.charAt(i) === secretWord.charAt(i)}
        />)
    }
    return <div className="word">
        {letters}
    </div>
}

export default CheckWord
