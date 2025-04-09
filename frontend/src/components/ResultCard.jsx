import React from 'react';
import "./ResultCard.css";

const ResultCard = ({movie}) => {
  return (
    <div className='result-card'>
    <div className='poster-wrapper'>
    {movie.Poster ? (
 <img src={movie.Poster} alt={movie.title}/>
    ):(
    <div className='filter-poster'> </div>
    )}
     </div>
     <div className='info'> 
     <div className='heading'> 
        <h3 className='title'>{movie.title}</h3>
        {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : "-" }
     </div>
     </div>
      </div>
);
};

export default ResultCard;