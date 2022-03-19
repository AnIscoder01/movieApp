import './App.css';
import NavBar from './component/NavBar';
import MoviesList from './component/MoviesList';
import {movies} from './component/MoviesData';
import { useState } from 'react';


function App() {

  const [films,setfilms]=useState(movies);
  const [name,setName]=useState("");
  const [ratingSearch,setRatingSearch]=useState(0);
  
  return(  
    <div className="App">

     <NavBar setfilms={setfilms} films={films} name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
     
     <MoviesList ratingSearch={ratingSearch} films={films} name={name}/>
     
    </div>

);
}

export default App;
