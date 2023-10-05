import PropTypes from "prop-types";

const NotFound = ({ title }) => {
  return <div>Not Found {title}</div>;
};

NotFound.prototype = {
  title: PropTypes.string.isRequired,
};

export default NotFound;
