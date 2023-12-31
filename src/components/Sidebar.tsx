import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/esm/Nav";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <NavBar sticky="top" className="flex-column sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">My Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">Matrix Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">Sign In</Nav.Link>
      </Nav.Item>
    </NavBar>
  );
}
