"use client";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-card">

      <img src={pokemon.image} alt={pokemon.name} className="pokemon-image"/>

      <h3>{pokemon.name || "Unknown Pokémon"}</h3>

      <div className="pokemon-types">
        {(pokemon.types ?? []).map((type, index) => (
          <span key={`${type}-${index}`} className={`type-badge ${type.toLowerCase()}`}>
            {type}
          </span>
        ))}
      </div>

      <p>Height: {pokemon.height ?? "N/A"}</p>
      <p>Weight: {pokemon.weight ?? "N/A"}</p>
    </div>
  );
}
