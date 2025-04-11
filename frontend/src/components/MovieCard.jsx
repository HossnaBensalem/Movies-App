import React, { useState } from 'react'
import "./MovieCard.css";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!showDescription) {
      // Only fetch details if we don't have them yet
      if (!movieDetails && movie.imdbID) {
        setIsLoading(true);
        try {
          // Use the movie ID to get details
          const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=2541d530`);
          const data = await response.json();
          if (data.Response === "True") {
            setMovieDetails(data);
          }
        } catch (error) {
          console.error("Error fetching movie details:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
    setShowDescription(!showDescription);
  };

  return <div className='movie-card'>
    <div className='overlay' onClick={handleClick}></div>
    {movie.Poster ? (<img src={movie.Poster} alt={movie.Title}/>
    ) : (
    <div className='filter-poster'></div>
    )}
    <MovieControls movie={movie} type={type}/>
   
    {showDescription && (
      <div className="movie-description">
        <h3>{movie.Title}</h3>
        {isLoading ? (
          <p>Loading details...</p>
        ) : (
          <>
            <p>{movieDetails?.Plot || movie.Plot || "No description available"}</p>
            {(movieDetails?.Year || movie.Year) && <p>Release Year: {movieDetails?.Year || movie.Year}</p>}
            {(movieDetails?.imdbRating || movie.imdbRating) && <p>Rating: {movieDetails?.imdbRating || movie.imdbRating}</p>}
            {(movieDetails?.Genre || movie.Genre) && <p>Genre: {movieDetails?.Genre || movie.Genre}</p>}
            {(movieDetails?.Director || movie.Director) && <p>Director: {movieDetails?.Director || movie.Director}</p>}
            {(movieDetails?.Actors || movie.Actors) && <p>Actors: {movieDetails?.Actors || movie.Actors}</p>}
          </>
        )}
        <button onClick={handleClick} className="close-btn">Close</button>
      </div>
    )}
  </div>
};

export default MovieCard;