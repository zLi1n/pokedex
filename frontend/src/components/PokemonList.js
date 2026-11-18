"use client";

import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons = [], loading }) {
    const pokemonArray = Array.isArray(pokemons)
        ? pokemons
        : Array.from(pokemons.values());

    return (
        <div className="pokemon-list">
            {pokemonArray.length > 0 ? (
                pokemonArray.map((pokemon, index) => (
                    <PokemonCard
                        key={pokemon.name ?? index}
                        pokemon={pokemon}
                    />
                ))
            ) : (
                !loading && <p className="no-results">No Pokémon found.</p>
            )}

            {loading && <p className="loading">Loading Pokémon...</p>}
        </div>
    );
}