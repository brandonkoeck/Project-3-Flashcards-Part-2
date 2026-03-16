import { useState } from 'react'
import { pokemonData } from './pokemonData'

function PokemonCard({pokemon, currentIndex, setCurrentIndex}) {
    const [isFlipped, setIsFlipped] = useState(0)
    const [guessInput, setGuessInput] = useState('')
    const [feedback, setFeedback] = useState(null)

    const cardFlip = () => {
      setIsFlipped(!isFlipped)
    }

    const backButton = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
      setIsFlipped(0)
      setFeedback(null)
      setGuessInput("")
    }

    const nextButton = () => {
      if (currentIndex < pokemonData.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
      setIsFlipped(0)
      setFeedback(null)
      setGuessInput("")
    }

    const textBox = (e) => {
      setGuessInput(e.target.value)
    }

    const submitHandler = () => {
      if (guessInput.toLowerCase() === pokemon.name.toLowerCase()) {
        setFeedback(1)
      } else {
        setFeedback(0)
      }
    }

    return (
      <div className="card-wrapper">
        <div className="pokemon-card" onClick={cardFlip}>
          <img src={isFlipped ? pokemon.after : pokemon.before}/>
        </div>
        <div className="guess-section">
          <label className="guess-label">Guess the answer here:</label>
          <div className="input-submit-container">
            <input name="guessInput" value = {guessInput} onChange={textBox} style={{borderColor: feedback === null ? 'black' : feedback === 1 ? 'green' : 'red', borderWidth: '2px'}}></input>
            <button onClick={submitHandler}>Submit</button>
          </div>
        </div>
        <div className="button-section">
        <button onClick={backButton} style={{color: currentIndex === 0 ? 'gray' : 'white'}}>Back</button>
        <button onClick={nextButton} style={{color: currentIndex >= pokemonData.length - 1 ? 'gray' : 'white'}}>Next</button>
        </div>
      </div>
    )
  }

export default PokemonCard