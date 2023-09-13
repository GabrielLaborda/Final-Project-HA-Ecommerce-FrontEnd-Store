import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";
import "./Navbar.css";
import { useEffect, useState } from "react";

function NavbarCart() {
  const [scroll, setScroll] = useState(100);

  const handleScroll = () => {
    console.log(window.scrollY);
    const scroller = window.scrollY;
    setScroll((prev) => 100 - scroller / 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-100">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
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
                <Nav.Link
                  className="text-black scrolling-white"
                  href="#action1"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-black scrolling-white"
                  href="#action2"
                >
                  About Our Project
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
                  <NavDropdown.Item href="#action3">Completes</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Decks</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Trucks</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Wheels</NavDropdown.Item>
                </NavDropdown>
              </Nav>
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
