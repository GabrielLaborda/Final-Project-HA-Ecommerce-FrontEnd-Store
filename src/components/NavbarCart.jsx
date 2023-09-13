import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";
import "./Navbar.css";

function NavbarCart() {
  return (
    <>
    <header className='w-100'>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
<<<<<<< Updated upstream
          <img
            src="./UrbanRush-logo1-white5.svg"
            alt=""
            width="200"
            height="60"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">
=======
          <img src="./UrbanRush-logo1-white5.svg" alt="" width="200" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className="text-black scrolling-white" href="#action1">
>>>>>>> Stashed changes
              Home
            </Nav.Link>
            <Nav.Link className="text-black scrolling-white" href="#action2">
              About Our Project
            </Nav.Link>
              <NavDropdown title="Shop" id="navbarScrollingDropdown" className='scrolling-white'>
                  <NavDropdown.Item href="#action3">All Products</NavDropdown.Item>
                  <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Completes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Decks</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Trucks</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Wheels</NavDropdown.Item>
            </NavDropdown>
          </Nav>
<<<<<<< Updated upstream
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="bg-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Form>
=======
>>>>>>> Stashed changes
        </Navbar.Collapse>
      </Container>
      <Cart />
      </Navbar>
    </header>
        <script type="text/javascript">
        {window.addEventListener("scroll", function () {
          let header = document.querySelector("header");
          header.classList.toggle("scrolling", window.scrollY > 0);
        })}
    </script>
    </>
  );
}

export default NavbarCart;
