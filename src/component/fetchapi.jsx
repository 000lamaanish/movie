import './moviesfetch.css'
import React, { useState, useEffect } from "react";

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=b0f44254786d6ba00216937a2260e18f`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Base URL for images

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Failed to fetch movies");
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}


            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
            {/* <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                    
                ))}
            </ul> */}
        </div>
    );
}


