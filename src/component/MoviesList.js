import MovieCard from "./MovieCard";

const MoviesList=({movies})=>{
    return(
        <div style={{display:'flex',flexWrap:'wrap',padding:'100px',justifyContent:'space-evenly',widhth:'80%',margin:'auto'}}>
          {movies.map((movie,i)=>  <div>{ <MovieCard key={i} movie={movie}/> }</div> ) }
          </div>
    );
}
export default MoviesList;