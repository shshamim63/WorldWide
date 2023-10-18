import PropTypes from "prop-types";
import { Stack } from "react-bootstrap";

import notFoundImage from "../assets/notfound.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="page-container position-relative" id="not-found-page">
      <Stack gap={3}>
        <img src={notFoundImage} alt={title} className="not-foun-image" />
        <p className="apology-message">{`We're Sorry the page you requested could not be found`}</p>
        <button
          className="back-to-home-btn"
          onClick={() => navigate("/", { replace: true })}
        >
          Go to Homepage
        </button>
      </Stack>
    </div>
  );
};

NotFound.prototype = {
  title: PropTypes.string.isRequired,
};

export default NotFound;
