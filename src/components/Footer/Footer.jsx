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
            <Col lg="4" className="">
              <div className="logo">
                <div>
                  <h1 className="text-white">AniMart</h1>
                </div>
              </div>
              <p className="footer__text mt-4">
                AniMart is the go-to for anime fans, offering a curated
                selection of products. Enjoy a seamless shopping experience with
                a user-friendly interface, secure payments, and fast delivery.
                Explore our collection and join a community that loves anime!
              </p>
            </Col>
            <Col lg="3" className="mt-4 mt-lg-0">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Top Categories</h4>
                <ListGroup className="mb-4">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Mordan Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Usefull Links</h4>
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
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Contact</h4>
                <ListGroup className="mb-4 footer__contact">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <p>Chennai</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="bi bi-telephone-forward"></i>
                    </span>
                    <p>+91 8220973147</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="bi bi-envelope-at"></i>
                    </span>
                    <p>shanthisathya1@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col>
              <p className="footer__copyrights">
                Copyright {year} developed by Sathya D. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
