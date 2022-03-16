import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AddMovie from "../Addmovie";
import RatingSIze from "../rating";
import "./NavbarC.css";

function NavbbarC({ movies, setMovies, search, setSearch, rate, setRate }) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="mo">
            Movies App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Types</Nav.Link>
              <Nav.Link href="#pricing">Recent</Nav.Link>
            </Nav>
            <RatingSIze rate={rate} setRate={setRate} />
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </Form>
            <AddMovie movies={movies} setMovies={setMovies} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbbarC;
