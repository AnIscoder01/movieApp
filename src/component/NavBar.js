import {Container,Navbar,Nav,NavDropdown,Offcanvas,Form,FormControl} from 'react-bootstrap'
import Rating from './Rating';
import AddMovie from './AddMovie';

const NavBar=({films,setfilms,setName,ratingSearch,setRatingSearch})=>{

  const addfilm = (newMovie) =>{ 
  
    return setfilms([...films,newMovie])
  }

return(
<Navbar bg="dark" expand={false}>
 <h1 style={{color:'chocolate'}}>Movies dotCom</h1>
 
 <AddMovie addfilm={addfilm}/>
  
  <Container fluid>
    <Navbar.Toggle bg="dark" aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas  
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
     
      <Offcanvas.Body   >
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setName(e.target.value)}
          />
        </Form><Rating setRate={setRatingSearch} rate={ratingSearch}/>

        
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
)};
export default NavBar;