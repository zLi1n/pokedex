"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import BannerCarousel from "@/components/BannerCarousel";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import PokemonList from "@/components/PokemonList";
import { getPokemons } from "@/services/pokemonService";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPokemons = async (pageNumber) => {
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const data = await getPokemons(pageNumber, 10);

      if (!Array.isArray(data)) {
        throw new Error("Invalid API response format");
      }

      setPokemons((prev) => {
        const combined = [...prev, ...data];

        const uniquePokemons = Array.from(
          new Map(
            combined.map((pokemon) => [pokemon.name, pokemon])
          ).values()
        );

        return uniquePokemons;
      });

      setHasMore(data.length === 10);

    } catch (err) {
      console.error("Fetch Pokémon error:", err);
      setError("Unable to load Pokémon. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons(1);
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    (pokemon.name ?? "").toLowerCase().includes(search.toLowerCase())
  );

  const handleLoadMore = () => {
    if (loading || !hasMore) return;

    const nextPage = page + 1;

    setPage(nextPage);
    fetchPokemons(nextPage);
  };

  return (
    <main>
      <Header />

      <div className="page-container">
        <BannerCarousel />

        <section className="main-layout">
          <Sidebar position="left" />

          <div className="pokemon-section" id="pokemon">
            <SearchBar search={search} setSearch={setSearch} />

            <PokemonList
              pokemons={filteredPokemons}
              loading={loading}
            />

            {error && (
              <p className="error-message">{error}</p>
            )}

            {hasMore && !search && (
              <button
                className="load-more"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            )}
          </div>

          <Sidebar position="right" />
        </section>
      </div>
    </main>
  );
}
