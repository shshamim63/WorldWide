import { Spinner } from "react-bootstrap";

const FullPageSpinner = () => {
  return (
    <div className="page-container position-relative">
      <Spinner animation="border" className="full-page-spinner" />
    </div>
  );
};

export default FullPageSpinner;
