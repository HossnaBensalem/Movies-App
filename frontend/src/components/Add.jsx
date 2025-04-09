import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./Add.css";
import ResultCard from './ResultCard';

function Add() {
    const[searchValue , setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);
 useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=2541d530`)
    .then((responce)=>{
        if (responce.data.Search) {
           setMovies(responce.data.Search);
        }
      
    }).catch((error)=> console.log(error));
 },[searchValue]);
    return (
    <div className='add-page'> 
    <div className='container'>
        <div className='add-content'>
            <div className='input-container'>
                <input type='text' placeholder='Search for a movie'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            {
                movies.length > 0 && <ul className="results">
                    {movies.map((movie)=> (
                        <li key={movie.imdbID}>
                            {<ResultCard movie={movie} />} </li>
                ))}
                </ul>
            }
        </div>
    </div>
      
    </div>
  )
};

export default Add
