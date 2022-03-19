import { Card } from "react-bootstrap";
import Rating from "./Rating";
const MovieCard=({movie})=>{
    return(
    <>
         <Card style={{width:'250px'}}>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                
                    <Card.Text>
                    <img src={movie.posterUrl} alt='good'style={{ height:'300px',width:'200px'}}/>
                    </Card.Text>
                    <p><Rating rate={movie.rate}/></p>
                </Card.Body>
        </Card>
    </>);
}

export default MovieCard;