import { Col, Row } from "react-bootstrap";
import pricing from "../assets/img-2.jpg";
import Header from "../components/Header";

const Pricing = () => {
  return (
    <main className="pricing-container position-relative">
      <Header />
      <section className="d-flex pricing-section align-items-center">
        <Row className="justify-content-center">
          <Col sm={8} md={7} lg={5}>
            <h2 className="pricing-header">
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p className="pricing-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </Col>
          <Col sm={8} md={7} lg={{ span: 6, offset: 1 }}>
            <img
              src={pricing}
              alt="overview of a large city with skyscrapers"
              className="pricing-img"
            />
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Pricing;
