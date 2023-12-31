import PropTypes from "prop-types";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const HomePage = ({ title }) => {
  return (
    <main className="homepage-container position-relative">
      <Header title={title} />
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center homepage-header">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className="text-center homepage-body">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login" className="home-page-start-btn">
          Start tracking now
        </Link>
      </section>
    </main>
  );
};

HomePage.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
