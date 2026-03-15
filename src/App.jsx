import { useState } from 'react'
import { pokemonData } from './pokemonData'

  function PokemonCard({pokemon, setCurrentIndex}) {
    const [isFlipped, setIsFlipped] = useState(0)

    const cardFlip = () => {
      setIsFlipped(!isFlipped)
    }

    const nextButton = () => {
      setCurrentIndex(Math.floor(Math.random() * pokemonData.length))
      setIsFlipped(0)
    }

    return (
      <div className="card-wrapper">
        <div className="pokemon-card" onClick={cardFlip}>
          <img src={isFlipped ? pokemon.after : pokemon.before}/>
        </div>
        <button onClick={nextButton}>Next</button>
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
