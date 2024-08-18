import * as React from "react"
import "./Words.styles.sass"
import Letter from "./Letter"

const letterNeeded = (index, letters, secretWord) => {
    const letter = letters.charAt(index)
    //number of time this letter appears in the secretWord without a direct match in letters
    //how many of this letter we need
    let balance = 0
    //number of times this letter appears in an incorrect spot
    //if occurrence = 0 the letter is in the correct spot
    //if occurrence = 1 this is the first occurence of this letter incorrectly
    //etc
    let occurrence = 0
    for (let i = 0; i < letters.length; i++) {
        const currentLetter = letters.charAt(i)
        const secretLetter = secretWord.charAt(i)
        if (letter === secretLetter && letter !== currentLetter) {
            balance = balance + 1
        }
        if (letter === currentLetter && letter !== secretLetter && index >= i) {
            occurrence = occurrence + 1
        }
    }
    return occurrence <= balance
}

const Word = (params) => {
    const { letters, empty, secretWord } = params
    const letterElements = []
    for (let i = 0; i < 5; i++) {
        let color = ''
        if (secretWord) {
            if (secretWord.charAt(i) === letters.charAt(i)) {
                color = 'green'
            } else if (letterNeeded(i, letters, secretWord)) {
                color = 'yellow'
            } else {
                color = 'red'
            }
        }
        letterElements.push(<Letter
            key={`word-${params.word}letter-${i}`}
            letter={letters.charAt(i)}
            empty={empty}
            color={color}
        />)
    }
    return <div className="word">
        {letterElements}
    </div>
}

export default Word
