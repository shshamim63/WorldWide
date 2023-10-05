import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import pricing from "../assets/img-2.jpg";
import Header from "../components/Header";

const Pricing = ({ title }) => {
  return (
    <main className="page-container position-relative">
      <Header title={title} />
      <section className="d-flex page-section-container align-items-center">
        <Row className="justify-content-center">
          <Col sm={8} md={7} lg={5}>
            <h2 className="page-header">
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p className="page-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </Col>
          <Col sm={8} md={7} lg={{ span: 6, offset: 1 }}>
            <img
              src={pricing}
              alt="overview of a large city with skyscrapers"
              className="page-img"
            />
          </Col>
        </Row>
      </section>
    </main>
  );
};

Pricing.prototype = {
  title: PropTypes.string.isRequired,
};

export default Pricing;
