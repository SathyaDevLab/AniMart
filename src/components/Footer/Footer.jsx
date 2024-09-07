import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <h1 className="text-white">AniMart</h1>
              <p className="footer__text my-3">
                {
                  "Welcome to AniMart, your anime paradise! From epic figures to stylish merch, we've got everything to fuel your fandom. Shop with ease and get your goodies fast. Join the anime squad now!"
                }
              </p>
            </Col>

            <Col lg="3">
              <h4 className="quick__links-title">Categories</h4>
              <ListGroup className="mb-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="2">
              <h4 className="quick__links-title">Quick Links</h4>
              <ListGroup className="mb-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt"></i>
                  <p>Chennai</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-forward"></i>
                  <p>+91 8220973147</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-at"></i>
                  <p>shanthisathya1@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col>
              <p className="footer__copyrights">
                {` © ${year} Sathya. Yep, this stuff is mine!`}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
