"use client";

export default function SearchBar({ search, setSearch }) {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search Pokémon by name..." 
                value={search} onChange={(e) => setSearch(e.target.value)}/>

            {search && (
                <button onClick={() => setSearch("")}>Clear</button>
            )}
        </div>
    );
}
