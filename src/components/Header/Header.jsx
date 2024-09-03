import React, { useRef, useEffect } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import logo from "../../assets/images/AniMart-logo.png";
import userIcon from "../../assets/images/user-icon.jpg";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    dispaly: "Home",
  },
  {
    path: "shop",
    dispaly: "Shop",
  },
  {
    path: "Cart",
    dispaly: "Cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();

  const stickHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickHeader();
    return () => window.removeEventListener("scroll", stickHeader);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div ref={headerRef}>
        <header className="header">
          <Container>
            <Row>
              <div className="nav__wrapper">
                <div className="logo">
                  <img src={logo} alt="Logo" />
                  {/* <div>
                    <h1>AniMart</h1>
                  </div> */}
                </div>
                <div className="navigation" ref={menuRef}>
                  <ul className="menu">
                    {nav__links.map((item, index) => (
                      <li className="nav__item" key={index}>
                        <NavLink
                          to={item.path}
                          className={(navClass) =>
                            navClass.isActive ? "nav__active" : ""
                          }
                        >
                          {item.dispaly}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="nav__icons">
                  <span className="fav__icon">
                    <i className="bi bi-heart"></i>
                    <span className="badge">99</span>
                  </span>
                  <motion.span
                    className="cart__icon"
                    whileTap={{ scale: 1.2 }}
                    onClick={navigateToCart}
                  >
                    <i className="bi bi-bag-heart"></i>
                    <span className="badge">{totalQuantity}</span>
                  </motion.span>
                  <span className="">
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt="User Icon"
                    />
                  </span>
                  {/* <div className="mobile__menu">
                    <span onClick={menuToggle}>
                      <i className="bi bi-list"></i>
                    </span>
                  </div> */}
                  <div className="d-lg-none d-flex align-items-center">
                    <input
                      id="burger-checkbox"
                      type="checkbox"
                      onClick={menuToggle}
                    />
                    <label className="burger" htmlFor="burger-checkbox">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </header>
      </div>
    </>
  );
};

export default Header;
