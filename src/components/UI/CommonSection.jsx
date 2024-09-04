import React from "react";
import { Container } from "reactstrap";
import "../../styles/commonSection.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section border">
      <Container className="text-center">
        <h1>{title}</h1>
        <p className="text-white">Huge savings await you! Shop now and enjoy a fantastic discount.</p>
      </Container>
    </section>
  );
};

export default CommonSection;
