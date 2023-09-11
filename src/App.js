import React, { useEffect, useState } from "react";

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

// 5fdbcac7

const API_URL = 'http://www.omdbapi.com?apikey=5fdbcac7'

// const movie1 = {
//     "Title": "Spider-Man: Across the Spider-Verse",
//     "Year": "2023",
//     "imdbID": "tt9362722",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
// }

const App = () => {

    const [Movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(()=>{
        searchMovies('spider');
    },[]);

    return (
       <div className="app">
         <h1>Movies.com</h1>

        <div className="search">

            <input
                placeholder="search for movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}>
            </input>   
        
            <img src = {SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
        </div>

        {Movies?.length > 0 
            ? (
                <div className="container">
                    {Movies.map((movie) => (<MovieCard movie={movie}/>))}
                </div>
            ) : (
                <div className="empty">
                    <h2> No movies found</h2>
                </div>
            )}
      </div>
    );
}

export default App;