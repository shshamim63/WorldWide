import product from "../assets/img-1.jpg";

import Header from "../components/Header";

import { Row, Col } from "react-bootstrap";

const Product = () => {
  return (
    <main className="page-container position-relative">
      <Header />
      <section className="d-flex page-section-container align-items-center">
        <Row className="gy-5 justify-content-center">
          <Col sm={8} md={7} lg={5}>
            <img
              src={product}
              alt="overview of a large city with skyscrapers"
              className="page-img"
            />
          </Col>
          <Col className="offset-lg-1" sm={8} md={7} lg={6}>
            <h3 className="page-header">About WorldWide.</h3>
            <p className="page-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p className="page-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Product;
