import React from 'react'
import Moviecard from '../component/moviecard';
import { useState, useEffect } from 'react';
import "../css/Home.css"
import { searchMovies, Getpopularmovie } from '../component/api';
// import Fetchapi from "../component/fetchapi"

const Homepage = () => {

    const [search, setSearch] = useState("");

    const [movies, setMovies] = useState([]);
    // const movies = getpopularmovie()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Loadpopularmovies = async () => {
            try {
                const popularmovies = await Getpopularmovie()
                setMovies(popularmovies)
            } catch (err) {
                console.log(err)
                setError("Failed ro load movies...")
            } finally {
                setLoading(false)
            }
        }

        Loadpopularmovies()
    }, []);


    const handleSearch = (e) => {
        alert(search)
    };

    return (
        <div>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" placeholder='search the movie' className='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='search-button'>search</button>
            </form>
            <div className='movies-grid'>

            </div>
            {Array.isArray(movies) && movies.length > 0 ? (
                movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)
            ) : (
                <p>No movies available.</p>
            )}

        </div>

    )
}

export default Homepage
