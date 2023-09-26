import { useState } from "react";
import logo from "../assets/logo.png";
import {
  Button,
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";

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
            className={
              "nav-item" + (activeHeader == "product" ? " active" : "")
            }
            onClick={() => handleOnActive("product")}
          >
            PRODUCT
          </NavLink>
          <NavLink
            className={
              "nav-item" + (activeHeader == "pricing" ? " active" : "")
            }
            onClick={() => handleOnActive("pricing")}
          >
            PRICING
          </NavLink>
          <NavLink>
            <Button>LOG IN</Button>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
