import { useState } from "react";
import logo from "../assets/logo.png";
import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState("");

  function handleOnActive(headerValue) {
    setActiveHeader(headerValue);
  }
  return (
    <Navbar>
      <Container fluid className="pl-5 pr-5">
        <NavbarBrand>
          <img src={logo} alt="WorldWise" className="brand-image" />
        </NavbarBrand>
        <Nav>
          <NavLink
            as={Link}
            to="/product"
            className={
              "nav-item" + (activeHeader == "product" ? " active" : "")
            }
            onClick={() => handleOnActive("product")}
          >
            PRODUCT
          </NavLink>
          <NavLink
            as={Link}
            to="/pricing"
            className={
              "nav-item" + (activeHeader == "pricing" ? " active" : "")
            }
            onClick={() => handleOnActive("pricing")}
          >
            PRICING
          </NavLink>
          <NavLink as={Link} to="/login" className="nav-item nav-button">
            LOG IN
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
