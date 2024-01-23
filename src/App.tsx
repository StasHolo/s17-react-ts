import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"

function App() {
  
  const [poke, setPoke] = useState({ results: [] });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((r) => {
    return r.json() 
})
    .then(r => {
        setPoke(r)
    })
}, [])

console.log('pokemons:', poke)

  return (
    <>

    <h1> POKEMONS</h1>
      <div className='pokeBox'>
      {poke.results.map((pokemon) => ( 
        <Card className='pokeCard' key={pokemon.name} >
          <Card.Img className='pokeImg' variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(pokemon.url)}.png`}
            alt={pokemon.name} />
              <Card.Body className='pokeBody'>
              <Card.Title>{pokemon.name}</Card.Title>
              </Card.Body>
        </Card>
        
                ))}

      </div>
      
    </>
  )
}
function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

export default App
