import { useState } from 'react'
import { pokemonData } from './pokemonData'

  function PokemonCard({pokemon, currentIndex, setCurrentIndex}) {
    const [isFlipped, setIsFlipped] = useState(0)

    const cardFlip = () => {
      setIsFlipped(!isFlipped)
    }

    const backButton = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
      setIsFlipped(0)
    }

    const nextButton = () => {
      if (currentIndex < pokemonData.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
      setIsFlipped(0)
    }

    return (
      <div className="card-wrapper">
        <div className="pokemon-card" onClick={cardFlip}>
          <img src={isFlipped ? pokemon.after : pokemon.before}/>
        </div>
        <label>
          Guess the answer here:
          <input name="guessInput"></input>
        </label>
        <button onClick={backButton}>Submit</button>
        <button onClick={backButton} style={{color: currentIndex === 0 ? 'gray' : 'white'}}>Back</button>
        <button onClick={nextButton} style={{color: currentIndex >= pokemonData.length - 1 ? 'gray' : 'white'}}>Next</button>
      </div>
    )
  }

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  return (
    <>
      <div className = "app-container">
        <h1>Who's that Pokemon?</h1>
        <h2>Guess the Pokemon based on its silhouette. Click on a card to flip it.</h2>
        <h3>Total cards: {pokemonData.length}</h3>
        <div className = "card-container">
          <PokemonCard pokemon={pokemonData[currentIndex]} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
      </div>
    </>
  )
}

export default App
