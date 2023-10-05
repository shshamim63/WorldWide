import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="d-flex justify-content-center sidebar">
      <Logo />
      <AppNav tab="cities" />
      <Outlet />
      <footer className="sidebar-footer-container">
        <p className="sidebar-footer-copyright">
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
