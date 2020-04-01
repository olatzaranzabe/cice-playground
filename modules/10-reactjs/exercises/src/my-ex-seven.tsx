import React, { useState, useEffect } from 'react'

interface PokemonDto {
  count: Number
  next: string
  previous: null | string
  results : { name:string; url: string }[]
}
export const MyExSeven: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([])
  
  const fetchData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    const result = (await response.json()) as PokemonDto
    const names = result.results.map(result => result.name)
    setPokemons(names)
  }
  useEffect(() => {
    fetchData()
  }, [] )
 return (
  <div>
    <ul>
      {pokemons.map( x => {
        return <li key={x}>{x}</li>
      }) }
    </ul>
  </div>
 )
}
