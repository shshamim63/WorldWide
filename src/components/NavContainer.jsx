import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavContainer = ({ activeHeader, handleOnActive }) => {
  return (
    <Nav>
      <NavLink
        as={Link}
        to="/product"
        className={"nav-item" + (activeHeader == "product" ? " active" : "")}
        onClick={() => handleOnActive("product")}
      >
        PRODUCT
      </NavLink>
      <NavLink
        as={Link}
        to="/pricing"
        className={"nav-item" + (activeHeader == "pricing" ? " active" : "")}
        onClick={() => handleOnActive("pricing")}
      >
        PRICING
      </NavLink>
      <NavLink
        as={Link}
        to="/"
        className="nav-item nav-button"
        onClick={() => handleOnActive("")}
      >
        LOG IN
      </NavLink>
    </Nav>
  );
};

NavContainer.propTypes = {
  activeHeader: PropTypes.string,
  handleOnActive: PropTypes.func,
  children: PropTypes.children,
};

export default NavContainer;
