
import{Button,Modal,Form} from 'react-bootstrap';
import{useState} from 'react'
import Rating from './Rating';
import { movies } from './MoviesData';
function AddMovie({addfilm}) {
  const [show, setShow] = useState(false);
  const [name,setName] =useState("");
  const [rate,setRate] =useState(0);
  const [image,setImage] =useState("");



  const handelSave = () => {

    let newMovie ={
      title:name,
      posterUrl:image,
      rate:rate,
      id:Math.random()
    }
    addfilm(newMovie);
    setImage("")
    setRate(0)
    setName("")
    setShow(false)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
          Add Movie    
  </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
   
      <Form.Label>Movie name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Movie name"
            value={name} onChange={(e)=>{setName(e.target.value)}} 
          /> 
          <Form.Label>Movie image</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Movie image"
            value={image} onChange={(e)=>{setImage(e.target.value)}} 

            
          /> <Form.Label>Movie rate</Form.Label>
          <Rating rate={rate} setRate={setRate}/>

        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSave}>
            Save Changes
           {console.log(movies)} 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
