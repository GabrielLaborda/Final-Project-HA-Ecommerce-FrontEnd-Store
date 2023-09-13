import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function NavbarCart() {
  return (
    <>
      <header className="w-100">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto  my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="text-black scrolling-white" href="/">
                  Home
                </Nav.Link>

                <NavDropdown
                  title="Shop"
                  id="navbarScrollingDropdown"
                  className="scrolling-white"
                >
                  <NavDropdown.Item href="#action3">
                    All Products
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/products/completes">
                    Completes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Decks</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Trucks</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Wheels</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="text-black scrolling-white" href="/about">
                  About Our Project
                </Nav.Link>
                <Nav.Link
                  className="text-black scrolling-white"
                  href="#action2"
                >
                  {/* <Cart /> */}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
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
