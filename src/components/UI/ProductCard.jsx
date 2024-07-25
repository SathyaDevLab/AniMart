import React from "react";
import "../../styles/productCard.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const { imgUrl, productName, id, category, price } = item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        productName: productName,
        price: price,
        imgUrl: imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <Link to={`/shop/${id}`}>
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={imgUrl}
              alt="Product Image"
              width="100%"
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="product__info px-2 my-2">
            <h3 className="product__name">{productName}</h3>
            <span className="product__cate">{category}</span>
          </div>
        </Link>
        <div className="product__card-bottom px-2 d-flex align-items-center justify-content-between">
          <span className="price">${price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            className="icon"
            onClick={addToCart}
            style={{cursor:"pointer"}}
          >
            <i className="bi bi-plus"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
