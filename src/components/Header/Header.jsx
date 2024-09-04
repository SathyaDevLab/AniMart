import React, { useRef, useEffect } from "react";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import logo from "../../assets/images/AniMart-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";

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
  const { currentUser } = useAuth();
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionsRef = useRef(null);

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

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickHeader();
    return () => window.removeEventListener("scroll", stickHeader);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const toggleProfileActions = () =>
    profileActionsRef.current.classList.toggle("show__profileActions");

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
                  <Link to={"/home"} className="pointer">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="navigation" ref={menuRef}>
                  <ul className="menu">
                    <div className="logo text-center d-md-none">
                      <Link to={"/home"} className="pointer">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                    {nav__links.map((item, index) => (
                      <li className="nav__item" key={index}>
                        <div className="nav-hover">
                          <NavLink
                            to={item.path}
                            className={(navClass) =>
                              navClass.isActive ? "nav__active" : ""
                            }
                          >
                            {item.dispaly}
                          </NavLink>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="nav__icons ">
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
                  <div className="profile">
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={currentUser ? currentUser.photoURL : userIcon}
                      alt="User Icon"
                      onClick={toggleProfileActions}
                    />
                    <div className="profile__actions" ref={profileActionsRef}>
                      {currentUser ? (
                        <div
                          className="text-center p-3 w-100 profile-hover"
                          onClick={logout}
                        >
                          Logout
                        </div>
                      ) : (
                        <div className="d-flex flex-column">
                          <Link className="p-3 profile-hover" to="/signup">
                            SignUp
                          </Link>
                          <Link className="p-3 profile-hover" to="/login">
                            Login
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-lg-none d-flex align-items-center d-md-none">
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
