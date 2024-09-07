import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/productDetails.css";
import { motion } from "framer-motion";
import reviewProfile from "../assets/images/default-profile.jpg";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [addProduct, setAddProduct] = useState({});
  const [starrating, setStarRating] = useState(0);

  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAddProduct(docSnap.data());
      } else {
        toast.warning("no products");
      }
    };
  }, []);

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

  const relatedProduct = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating: starrating,
    };

    toast.success("Review submitted , Keep shopping");
    reviewUser.current.value = "";
    reviewMsg.current.value = "";
    setStarRating(0);
  };

  const addToCard = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6" className="text-end">
              <img
                src={imgUrl}
                // height={"500px"}
                width={"100%"}
                alt="Product Image"
              />
            </Col>
            <Col lg="6" className="d-flex flex-column justify-content-center">
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
              <div className="d-flex align-items-center gap-3">
                <span className="product__price">${price}</span>
                <span>Category: {category.toUpperCase()}</span>
              </div>
              <p>{shortDesc}</p>
              <div>
                <motion.button
                  whileTap={{ scale: 1.12 }}
                  className="shop__btn mt-4"
                  onClick={addToCard}
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
                            <h6>Sathya</h6>
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
                        <form className="form" onSubmit={submitHandler}>
                          <div className="form-group">
                            <label htmlFor="email">Name</label>
                            <input
                              ref={reviewUser}
                              type="text"
                              id="name"
                              name="name"
                              required
                              placeholder="Hi there !"
                            />
                          </div>
                          <div className="d-flex gap-2">
                            <label
                              htmlFor=""
                              className="d-flex align-items-center"
                            >
                              Give your rating :{" "}
                            </label>
                            <div className="d-flex align-items-center gap-2">
                              <motion.span
                                whileTap={{ scale: 1.4 }}
                                className="stars"
                                onClick={() => setStarRating(1)}
                              >
                                <i
                                  className={`bi bi-star${
                                    starrating >= 1 ? "-fill" : ""
                                  }`}
                                  style={{ fontSize: "14px", color: "coral" }}
                                ></i>
                              </motion.span>
                              <motion.span
                                className="stars"
                                whileTap={{ scale: 1.5 }}
                                onClick={() => setStarRating(2)}
                              >
                                <i
                                  className={`bi bi-star${
                                    starrating >= 2 ? "-fill" : ""
                                  }`}
                                  style={{ fontSize: "16px", color: "coral" }}
                                ></i>
                              </motion.span>
                              <motion.span
                                className="stars"
                                whileTap={{ scale: 1.6 }}
                                onClick={() => setStarRating(3)}
                              >
                                <i
                                  className={`bi bi-star${
                                    starrating >= 3 ? "-fill" : ""
                                  }`}
                                  style={{ fontSize: "18px", color: "coral" }}
                                ></i>
                              </motion.span>
                              <motion.span
                                className="stars"
                                whileTap={{ scale: 1.7 }}
                                onClick={() => setStarRating(4)}
                              >
                                <i
                                  className={`bi bi-star${
                                    starrating >= 4 ? "-fill" : ""
                                  }`}
                                  style={{ fontSize: "20px", color: "coral" }}
                                ></i>
                              </motion.span>
                              <motion.span
                                className="stars"
                                whileTap={{ scale: 1.8 }}
                                onClick={() => setStarRating(5)}
                              >
                                <i
                                  className={`bi bi-star${
                                    starrating >= 5 ? "-fill" : ""
                                  }`}
                                  style={{ fontSize: "22px", color: "coral" }}
                                ></i>
                              </motion.span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="textarea">
                              Leave your experience
                            </label>
                            <textarea
                              ref={reviewMsg}
                              name="textarea"
                              id="textarea"
                              rows="10"
                              cols="50"
                              placeholder="Message here ....."
                              required
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
            <Col lg="12" className="mt-4">
              <h2 className="related__title">You might also like</h2>

              <div className="d-flex flex-wrap my-2 justify-content-around justify-content-md-start">
                <ProductList data={relatedProduct} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
