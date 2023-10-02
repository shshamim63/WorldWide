import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const AppNav = () => {
  const [currentTab, setCurrentTab] = useState("");

  const handleOnTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <Nav className="justify-content-center navbar-container" activeKey="/home">
      <Nav.Item
        className={currentTab === "cities" ? "tab-active" : "tab-inactive"}
      >
        <Nav.Link
          as={Link}
          to="cities"
          onClick={() => handleOnTabChange("cities")}
        >
          CITIES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={currentTab === "countries" ? "tab-active" : "tab-inactive"}
      >
        <Nav.Link
          as={Link}
          to="countries"
          onClick={() => handleOnTabChange("countries")}
        >
          COUNTRIES
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default AppNav;
