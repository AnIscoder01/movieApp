import {Container,Navbar,Nav,NavDropdown,Offcanvas,Form,FormControl} from 'react-bootstrap'
import AddMovie from './AddMovie';
import { Modal } from 'bootstrap';
import Rating from './Rating';
const NavBar=({films,setfilms,setName,ratingSearch,setRatingSearch})=>{

  const addfilm = (newMovie) =>{ 
  
    return setfilms([...films,newMovie])
  }

return(
<Navbar bg="dark" expand={false}>
  <Container fluid>
    <Navbar.Toggle bg="dark" aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas  
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body   >
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setName(e.target.value)}
          />
        </Form><Rating setRate={setRatingSearch} rate={ratingSearch}/>

        <AddMovie addfilm={addfilm}/>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
)};
export default NavBar;