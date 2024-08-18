import * as React from "react"
import "./Words.styles.sass"
import Word from "./Word"

const Words = (params) => {
    const { secretWord, userInput, guesses } = params
    const words = []
    for (let i = 0; i < 6; i++) {
        if (i < guesses.length / 5) {
            words.push(<Word
                word={i}
                key={`word-${i}`}
                secretWord={secretWord}
                letters={guesses.slice(5*i, 5*i+5)}
            />)
        }
        else if (i === guesses.length / 5) {
            words.push(<Word
                word={i} key={`word-${i}`}
                letters={userInput}
                empty={guesses && guesses.slice(-5) === secretWord}
                secretWord={params.cheat ? secretWord : ''}
            />)
        } else {
            words.push(<Word
                word={i}
                key={`word-${i}`}
                letters=''
                empty={true}
            />)
        }
    }

    return <div className="word-container">
        {secretWord ?
            words
            :
            <Word word={0} letters={userInput}/>
        }
    </div>
}

export default Words
