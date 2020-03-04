import React, { useState } from 'react';

const Pokemon = () => {

    const [pokemon, addPokemon] = useState({
        name: '',
        type: '',
        img: ''

    });
    const arrPoke = []
    let Poke;
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const getPokemon = () => {
        fetch(url + 1)
            .then(res => res.json())
            .then(data => {
                 Poke = {
                    name: data.name,
                    type: data.types[0].type.name,
                    img: data.sprites.front_default
                }
                
                addPokemon(Poke);
                console.log(pokemon);
            })
    }

    return (
        <div>
            <button onClick={() => getPokemon()}>Traer opkemon</button>
            <label>Nombre: {pokemon.name}</label>
            <label>Tipo: {pokemon.type}</label>
            <img src={pokemon.img}/>
        </div>
    )

}

export default Pokemon;