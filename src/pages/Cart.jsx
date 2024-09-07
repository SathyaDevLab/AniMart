import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <Helmet title={"cart"}>
      <CommonSection title={"Shopping Cart"} />
      <section className="my-4">
        <Container>
          <Row>
            {cartItems.length === 0 ? (
              <h1 className="fs-4 text-center">No Item add to the cart</h1>
            ) : (
              <Col lg="9">
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="">
                          <img src={item.imgUrl} alt="image" />
                        </td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            style={{
                              cursor: "pointer",
                              fontSize: "25px",
                              color: "red",
                            }}
                            onClick={() => deleteProduct(item.id)}
                          >
                            <i className="bi bi-trash3"></i>
                          </motion.span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            )}
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <Link to={"./shop"}>
                  <button className="shop__btn w-100" to="/shop">
                    Continue Shopping
                  </button>
                </Link>
                <Link to={"/checkout"}>
                  <button className="shop__btn  w-100" to="/checkout">
                    Checkout
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
