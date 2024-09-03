import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Row, Container, Form, FormGroup } from "reactstrap";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title={"CheckOut"}>
      <CommonSection title={"CheckOut"} />
      <Container className="my-3">
        <Row className="d-flex justify-content-between gap-5 align-items-center">
          <Col lg="6">
            <h6 className="py-3 mb-3">Billing Information</h6>
            <Form className="billing__form">
              <FormGroup className="form__group">
                <input type="text" placeholder="enter your name" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="enter your email" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="mobile number" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="street address" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Postal code" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Country" />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4" className="my-3">
            <div className="checkout__cart">
              <h6>
                Total Oty: <span>{totalQty} items</span>
              </h6>
              <h6>
                Sub-Total: <span>${totalAmount}</span>
              </h6>
              <h6>
                <span>
                  Shipping : <br />
                 <span className="" style={{fontSize:"12px"}}> free shipping</span>
                </span>
                <span>$0</span>
              </h6>
              <h5>
                Total Cost: <span>${totalAmount}</span>
              </h5>
              <button className="buy__btn auth__btn w-100">
                Place an Order
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Checkout;
