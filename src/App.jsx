import { useState } from 'react'
import { pokemonData } from './pokemonData'
import PokemonCard from './pokemonCard'

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