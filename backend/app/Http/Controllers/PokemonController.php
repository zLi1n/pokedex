<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
        public function index(Request $request) {
            $page = max(1, (int) $request->query('page', 1));
            $limit = min(50, max(1, (int) $request->query('limit', 10)));

            $offset = ($page - 1) * $limit;

            $response = Http::get(
                'https://pokeapi.co/api/v2/pokemon',
                [
                    'limit' => $limit,
                    'offset' => $offset
                ]
            );

            if ($response->failed()) {
                return response()->json([
                    'error' => 'Unable to retrieve Pokémon'
                ], 502);
            }

            $results = $response->json()['results'];

            $pokemons = [];

            foreach ($results as $pokemon) {

                $detailResponse = Http::get($pokemon['url']);

                if ($detailResponse->failed()) {
                    continue;
                }

                $details = $detailResponse->json();

                $types = collect($details['types'])
                    ->pluck('type.name')
                    ->toArray();

                $pokemons[] = [
                    'name' => $details['name'],
                    'image' => $details['sprites']['other']['official-artwork']['front_default'] ?? null,
                    'types' => $types,
                    'height' => $details['height'],
                    'weight' => $details['weight']
                ];
            }
            return response()->json($pokemons);
        }
}
