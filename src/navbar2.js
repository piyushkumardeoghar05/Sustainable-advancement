import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './navbar.module.css'

import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar2() {
  return (
    <>
    {/* <div id="navbar"> */}
      {['lg'].map((expand) => (
        <Navbar sticky="top" key={expand} bg="light" expand={expand} className="pt-3">
          <Container fluid>

        <dev className="navbar-brand">  
        <a href="#top">
           <img
          src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
          style={{ width: "3.5rem" }}
          alt=""
        />
        </a>
        {/* <span style={{fontSize:"80%"}}>SUSTAINABLE ADVANCEMENTS</span>
         */}
        </dev>
        {/* <h5>SUSTAINABLE ADVANCEMENTS</h5> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  SUSTAINABLE ADVANCEMENTS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className={classes.navlink} href="#top">
              HOME
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#Gallery">
              GALLERY
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#ContactUs">
              CONTACT US
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#Teams">
              ABOUT US
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#Testimonials">
              TESTIMONIALS
            </Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* </div> */}
    </>
  );
}

export default Navbar2;