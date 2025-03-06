import React, { useState, useEffect } from "react";
import Moviecard from "../component/moviecard";
import "../css/Home.css";
import { searchMovies, Getpopularmovie } from "../component/api";
import Navbar from "../component/navbar";


const Homepage = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const LoadPopularMovies = async () => {
            try {
                const popularMovies = await Getpopularmovie();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        LoadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search.trim()) return;

        try {
            setLoading(true);
            setError(null);
            const results = await searchMovies(search);
            setMovies(results);
        } catch (err) {
            setError("Failed to fetch search results...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <p className="loading">Loading movies...</p>}
            {error && <p className="error">{error}</p>}

            <div className="movies-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)
                ) : (
                    !loading && <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default Homepage;
