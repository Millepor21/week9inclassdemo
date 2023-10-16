import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from 'react-router-dom'

export default function Heading(): JSX.Element {
  return (
    <>
      <NavBar sticky="top" data-bs-theme="dark" className="header">
        <Container>
          <NavBar.Brand as={NavLink} to="/">Matrix Social</NavBar.Brand>
        </Container>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
        </Nav.Item>
      </NavBar>
    </>
  );
}
