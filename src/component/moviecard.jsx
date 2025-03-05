import "../css/MovieCard.css"

function moviecard({ movie }) {
    function onfavouriteclick() {
        alert("added to favourite")
    }
    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie.title" />
                    <div className="favourite">
                        <button className="fav-btn" onClick={onfavouriteclick}>fav</button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>

            </div>
        </>
    )

}

export default moviecard;