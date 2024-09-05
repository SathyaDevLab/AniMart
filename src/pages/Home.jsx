import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.jpg";
import counterImg from "../assets/images/counter-timer-img.png";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";
import products from "../assets/data/products";

const Home = () => {
  const [trendProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    setTrendingProducts(products.filter((item) => item.category === "chair"));
    setBestSalesProducts(products.filter((item) => item.category === "sofa"));
    setMobileProducts(products.filter((item) => item.category === "mobile"));
    setWirelessProducts(
      products.filter((item) => item.category === "wireless")
    );
    setPopularProducts(products.filter((item) => item.category === "watch"));
  }, []);

  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Enhance Your Space with Minimalistic & Modern Designs</h2>
                <p>
                  Discover a curated selection of high-quality products designed
                  to elevate your living spaces. Shop now and experience the
                  perfect blend of style and functionality.
                </p>
                <motion.button whileTap={{ scale: 1.1 }} className="shop__btn">
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6" className="hero__img">
              <div className=" d-flex justify-content-end">
                <img src={heroImg} width={"83%"} alt="Hero Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="serices">
        <Services />
      </section>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title my-4">Trending Products</h2>
            </Col>
            <ProductList data={trendProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title my-4">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count my-3">
        <Container>
          <Row>
            <Col lg="6" md="6" className="d-flex align-items-center py-2">
              <div className="timing">
                <div className="clock__top-content my-3">
                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                  <h4 className="text-white fs-4 mb-3">Quality Armchair</h4>
                </div>
                <div>
                  <Clock />
                </div>
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} width={"70%"} alt="Counter Image" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrival my-3">
        <Container>
          <Row>
            <Col lg="12" className="text-center my-3">
              <h2 className="section__title my-4">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category my-3">
        <Container>
          <Row>
            <Col lg="12" className="text-center my-3">
              <h2 className="section__title my-4">Popular Categories</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
