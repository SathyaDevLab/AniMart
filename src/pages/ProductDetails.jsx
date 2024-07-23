import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/productDetails.css";
import { motion } from "framer-motion";
import reviewProfile from "../assets/images/default-profile.jpg";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    category,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;

  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

  const displayRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col col="6" className="text-end">
              <img
                src={imgUrl}
                height={"500px"}
                width={"500px"}
                alt="Product Image"
              />
            </Col>
            <Col col="6" className="d-flex flex-column justify-content-center">
              <div className="product__details">
                <h2>{productName}</h2>

                <div className="product__rating d-flex align-items-center gap-3 mb-4">
                  <div>
                    <span>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i className="bi bi-star-half"></i>
                    </span>
                    <span>
                      <i className="bi bi-star"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> rating)
                  </p>
                </div>
              </div>
              <span className="product__price">${price}</span>
              <p>{shortDesc}</p>
              <div>
                <motion.button
                  whileTap={{ scale: 1.12 }}
                  className="shop__btn mt-4"
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mb-5 mt-3">
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" && "active__tab"} pointer`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" && "active__tab"}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab-content mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-4">
                  <div className="review__weapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <div className="d-flex align-items-center">
                            <img
                              src={reviewProfile}
                              alt="Profile"
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                            <h6>{displayRandomName()}</h6>
                          </div>
                          <div className="ms-5">
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="review__form mt-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <h4>Leave your ecperience</h4>
                      <div className="form-container">
                        <form className="form">
                          <div className="form-group">
                            <label htmlFor="email">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="textarea">
                              Leave your experience
                            </label>
                            <textarea
                              name="textarea"
                              id="textarea"
                              rows="10"
                              cols="50"
                              required=""
                            ></textarea>
                          </div>
                          <button className="form-submit-btn" type="submit">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
