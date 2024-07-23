import React from "react";
import "./services.css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import servicesData from "../assets/data/serviceData";

const Services = () => {
  return (
    <>
      <section className="services my-4">
        <Container>
          <Row className="services-row">
            {servicesData.map((item, index) => (
              <Col lg="3" md="5" key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="services__item "
                  style={{ background: `${item.bg}` }}
                >
                  <span>
                    <i className={`bi bi-${item.icon}`}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
