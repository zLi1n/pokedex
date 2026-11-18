const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getPokemons(page = 1, limit = 10) {
    const response = await fetch(
        `${API_URL}/api/pokemons?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
    }

    const data = await response.json();

    return data;
}
