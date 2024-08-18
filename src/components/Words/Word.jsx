import * as React from "react"
import "./Words.styles.sass"
import Letter from "./Letter"

const Word = (params) => {
    const letters = []
    for (let i = 0; i < 5; i++) {

        letters.push(<Letter key={`word-${params.word}letter-${i}`} letter={params.letters.charAt(i)} empty={params.empty}/>)
    }
    return <div className="word">
        {letters}
    </div>
}

export default Word
