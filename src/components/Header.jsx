import { useState } from "react";
import logo from "../assets/logo.png";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState("");

  function handleOnActive(headerValue) {
    setActiveHeader(headerValue);
  }

  return (
    <Navbar className="nav-container position-absolute">
      <Container fluid className="nav-section-container">
        <NavbarBrand as={Link} to="/" onClick={() => handleOnActive("")}>
          <img src={logo} alt="WorldWise" className="brand-image" />
        </NavbarBrand>
        <NavContainer
          key={activeHeader}
          activeHeader={activeHeader}
          handleOnActive={handleOnActive}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
