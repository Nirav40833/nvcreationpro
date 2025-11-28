import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from './img/asset 0.png'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Comp.css';
const Menu = () => {
    return (
        <>
            {['xl'].map((expand) => (
                <div className=''>
                    <Navbar key={expand} expand={expand} className="mb-3 container">
                        <Container  >
                            <Navbar.Brand href="#"><div className='imgsetnv'><img src={logo1}></img></div></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src={logo1}></img>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 menu_text ">
                                        <Nav.Link href="#"><Link to="/" className='text_hover'>Home</Link></Nav.Link>
                                        <Nav.Link href="#"> <Link to="/Courses" className='text_hover'>Tour</Link></Nav.Link>
                                        <Nav.Link href="#"><Link to="/Blogs" className='text_hover'>Blogs</Link></Nav.Link>             
                                        <Nav.Link href="#"><Link to="/Events" className='text_hover'>Events</Link></Nav.Link>
                                        <Nav.Link href="#"><Link to="/About" className='text_hover'>About</Link></Nav.Link>
                                        <Nav.Link href="#"><Link to="/Contact" className='text_hover'>Contact Us</Link></Nav.Link>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
            ))}
        </>
    )
}
export default Menu;