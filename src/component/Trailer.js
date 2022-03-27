import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import{movies} from './MoviesData'
export default function Trailer() {
  
    const {movieId}=useParams();   
   
 const movie=movies.find(movie=>movie.id==movieId)
 console.log(movie)
    return (

    <div style={{display:'flex',justifyContent:'center',paddingTop:'10%'}}>

        <iframe width="560" height="315" src={movie.scoop} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )
}
