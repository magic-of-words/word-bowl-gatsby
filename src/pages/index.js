import * as React from "react"
import "./styles.sass"
import Words from '../components/Words/Words'
import Button from '../components/Button'
import Keyboard from "../components/Keyboard/Keyboard"
import alphabet from '../constants/alphabet'
import tradeWords from "../abilities/tradeWords"

const WordBowl = () => {
  const [secretWord, setSecretWord] = React.useState('')
  const [userInput, setUserInput] = React.useState('')
  const [guesses, setGuesses] = React.useState('')
  const [cheat, setCheat] = React.useState(false)
  const userGuessedCorrectly = guesses && guesses.slice(-5) === secretWord
  let titleText = cheat && secretWord ? secretWord : 'word bowl'
  if (guesses.length === 30) titleText = 'you lose!'
  if (userGuessedCorrectly) titleText = 'you win!'
  const buttonText =  userGuessedCorrectly || guesses.length === 30 ? 'reset' : 'submit'
  const buttonDisabled = userInput.length !== 5 && buttonText !== 'reset'
  const onSubmit = async () => {
    if (userGuessedCorrectly) {
      setSecretWord('')
      setGuesses('')
      return
    }
    if (guesses.length === 30) {
      setSecretWord('')
      setGuesses('')
      return
    }
    if (!secretWord && userInput.length === 5) {
      const response = await tradeWords(userInput)
      setSecretWord(response.slice(-5))
      setUserInput('')
    }
    if (secretWord && userInput.length === 5) {
      setGuesses(prev => prev + userInput)
      setUserInput('')
    }
  }
  const handleKeyPress = (key) => {
    if (userGuessedCorrectly) return
    if (key === 'Backspace') setUserInput(prev=> prev.slice(0, prev.length - 1))
    if (alphabet.indexOf(key) !== -1 && userInput.length < 5) setUserInput(prev => prev + key)
  }
  React.useEffect(() => {
    const handleNativeKeyPress = (event) => {
      if (event.key === '?') setCheat(true)
      if (event.key === '$') setCheat(false)
      if (userGuessedCorrectly) return
      if (event.key === 'Backspace') setUserInput(prev => prev.slice(0, prev.length - 1))
      if (alphabet.indexOf(event.key) !== -1 && userInput.length < 5) setUserInput(prev => prev + event.key)
    }
    window.addEventListener('keydown', handleNativeKeyPress)
    return () => window.removeEventListener('keydown', handleNativeKeyPress)
  }, [userInput.length, guesses, secretWord, userGuessedCorrectly])
  return (
    <div className="game-container">
      <h1 className='title'>{titleText}</h1>
      <Words secretWord={secretWord} userInput={userInput} guesses={guesses}/>
      <Button onClick={onSubmit} text={buttonText} disabled={buttonDisabled}/>
      <Keyboard handleKeyPress={handleKeyPress}/>
    </div>
  )
}

export default WordBowl

export const Head = () => <title>word bowl</title>
