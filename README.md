# Fullstack Pokédex

A fullstack Pokédex web application built using **Laravel** and **Next.js**, integrated with the [PokéAPI](https://pokeapi.co/) to retrieve and display Pokémon information.

The application allows users to browse Pokémon, search by name, view Pokémon details, and navigate through the collection using pagination.

## Features

### Pokémon Collection
- Retrieve Pokémon data from PokéAPI through the Laravel backend.
- Display Pokémon official artwork, name, types, height, and weight.
- Display Pokémon types with different colours based on their type.

### Search
- Search Pokémon by name.
- Filter the currently loaded Pokémon collection.

### Pagination
- Load more Pokémon using the Load More button.
- Retrieve Pokémon data in batches of 10.
- Prevent duplicate Pokémon entries when loading additional pages.

### Banner Carousel
- Automatically rotate between three promotional banners.
- Navigate using previous and next arrows.
- Select a banner using the indicator dots.

### Page Layout
- Main promotional banner carousel.
- Two additional static banners.
- Left and right side images.
- Scrollable Pokémon collection.
- Search bar remains outside the scrollable Pokémon list.

## Technologies Used

| Technology | Purpose |
|---|---|
| Laravel (PHP) | Backend API |
| Next.js | Frontend application |
| React | Frontend components and state management |
| JavaScript | Application logic |
| CSS | Styling and responsive layout |
| PokéAPI | Pokémon data source |

## Project Structure

```text
pokedex/
│
├── backend/
│   ├── app/
│   │   └── Http/
│   │       └── Controllers/
│   │           └── PokemonController.php
│   ├── routes/
│   │   └── api.php
│   ├── config/
│   ├── .env.example
│   └── composer.json
│
├── frontend/
│   ├── public/
│   │   └── banners/
│   │       ├── banner1.jpg
│   │       ├── banner2.jpg
│   │       ├── banner3.jpg
│   │       ├── left-banner.jpg
│   │       └── right-banner.jpeg
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.js
│   │   │   ├── layout.js
│   │   │   └── globals.css
│   │   │
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── BannerCarousel.js
│   │   │   ├── Sidebar.js
│   │   │   ├── SearchBar.js
│   │   │   ├── PokemonList.js
│   │   │   └── PokemonCard.js
│   │   │
│   │   └── services/
│   │       └── pokemonService.js
│   │
│   ├── .env.example
│   └── package.json
│
└── README.md
```

*Note: The structure above is a reference. Adjust the filenames and folders to match the actual project.*

## Prerequisites

Make sure the following are installed:

- PHP
- Composer
- Laravel
- Node.js and npm
- Git

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/zLi1n/pokedex
cd pokedex
```

### 2. Backend Setup (Laravel)

Navigate to the backend directory:

```bash
cd backend
```

Install PHP dependencies:

```bash
composer install
```

Create the environment file:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Start the Laravel development server:

```bash
php artisan serve
```

The backend API will be available at:

```text
http://127.0.0.1:8000
```

### 3. Frontend Setup (Next.js)

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Start the Next.js development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## API Documentation

### Get Pokémon List

**Endpoint:**

```http
GET /api/pokemons
```

**Query Parameters:**

| Parameter | Description | Default |
|---|---|---|
| page | Page number | 1 |
| limit | Number of Pokémon per page | 10 |

**Example Request:**

```http
GET http://127.0.0.1:8000/api/pokemons?page=1&limit=10
```

**Example Response:**

```json
[
  {
    "name": "bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "types": [
      "grass",
      "poison"
    ],
    "height": 7,
    "weight": 69
  }
]
```

**Response Fields:**

| Field | Description |
|---|---|
| name | Pokémon name |
| image | Official Pokémon artwork URL |
| types | List of Pokémon types |
| height | Pokémon height (decimetres) |
| weight | Pokémon weight (hectograms) |

The Laravel backend retrieves the Pokémon list from PokéAPI, fetches the details for each Pokémon, extracts the required information, and returns the processed data to the frontend.

The frontend communicates with the Laravel API instead of calling PokéAPI directly.

## AI Assistance and Documentation

AI tools were used as development assistance throughout the project. The assistance included:

- **Project structure:** Suggestions for organising the Laravel backend, Next.js frontend, components, and service files.
- **Debugging:** Assistance in identifying and resolving issues with Pokémon card data not displaying correctly, including incorrect JavaScript data structures and property access.
- **Frontend styling:** Suggestions for CSS styling, Pokémon type badge colours, banner layouts, and carousel navigation.
- **Carousel implementation:** Assistance with automatic banner rotation, navigation arrows, and indicator dots.
- **Documentation:** Assistance in preparing the README and API documentation.

AI-generated suggestions were reviewed, tested, and adapted during implementation. Debugging involved checking browser console output, inspecting API responses, and modifying the frontend code to match the backend response structure.

## Data Source

Pokémon information is retrieved from:

- [PokéAPI](https://pokeapi.co/)

PokéAPI provides the Pokémon data and artwork used in this application.
