import './App.css';
import NavBar from './component/NavBar';
import MoviesList from './component/MoviesList';
import {movies} from './component/MoviesData';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import Trailer from './component/Trailer';
import Home from './component/Home';
function App() {

  const [films,setfilms]=useState(movies);
  const [name,setName]=useState("");
  const [ratingSearch,setRatingSearch]=useState(0);
  
  return(  
    <div className="App">

     <NavBar setfilms={setfilms} films={films} name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
       <Routes>
       <Route path='/' element={      <MoviesList ratingSearch={ratingSearch} films={films} name={name}/>     
}/>
        <Route path='/trailer/:movieId' element={<Trailer/>}></Route>
       
       </Routes>
       
  
    </div>
);
}

export default App;
