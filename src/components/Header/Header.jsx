import React, { useRef, useEffect } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.jpg";

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
  const headerRef = useRef(null);
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

  return (
    <>
      <div ref={headerRef}>
        <header className="header">
          <Container>
            <Row>
              <div className="nav__wrapper">
                <div className="logo">
                  <img src={logo} alt="Logo"/>
                  <div>
                    <h1>AniMart</h1>
                    {/* <h6>Sin/ce 2000</h6> */}
                  </div>
                </div>
                <div className="navigation">
                  <ul className="">
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
                    <i class="bi bi-heart"></i>
                    <span className="badge">99</span>
                  </span>
                  <span className="cart__icon">
                    <i class="bi bi-bag-heart"></i>
                    <span className="badge">1</span>
                  </span>
                  <span className="">
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt="User Icon"
                    />
                  </span>
                  <div className="mobile__menu">
                    <span>
                      <i class="bi bi-list"></i>
                    </span>
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
