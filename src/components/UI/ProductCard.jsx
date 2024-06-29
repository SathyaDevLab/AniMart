import React from "react";
import "../../styles/productCard.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { imgUrl, productName, id, category, price } = item;
  return (
    <>
      <Col lg="3" md="4">
        <div className="product__item">
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={imgUrl}
              alt="Product Image"
              width={"100%"}
            />
          </div>
          <div className="product__info px-2">
            <h3 className="product__name">
              <Link to={`/shop/${id}`}>{productName}</Link>
            </h3>
            <span className="">{category}</span>
          </div>
          <div className="product__card-bottom px-2 d-flex align-items-center justify-content-between">
            <span className="price">${price}</span>
            <motion.span whileTap={{ scale: 1.2 }} className="icon">
              <i class="bi bi-plus"></i>
            </motion.span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
