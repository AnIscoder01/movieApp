import MovieCard from "./MovieCard";

const MoviesList=({films,name,ratingSearch})=>{
    return(
        <div style={{display:'flex',flexWrap:'wrap',padding:'100px',justifyContent:'space-evenly',widhth:'80%',margin:'auto'}}>
          
          {films.filter(el=>el.title.toLowerCase().includes(name.toLowerCase().trim())&& el.rate >= ratingSearch).map((movie,i)=>  <div>{ <MovieCard key={i} movie={movie}/> }</div> ) }
          </div>
    );
}
export default MoviesList;

