import React, { useRef } from "react";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/admin-nav.css";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/images/user-icon.png";

const admin__nav = [
  { dispaly: "Dashboard", path: "/dashboard" },
  { dispaly: "All Products", path: "/dashboard/all-products" },
  { dispaly: "Add Product", path: "/dashboard/add-product" },
  { dispaly: "Users", path: "/dashboard/users" },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  const profileActionsRef = useRef(null);
  const toggleProfileActions = () =>
    profileActionsRef.current.classList.toggle("show__profileActions");
  return (
    <div>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>AniMart</h2>
              </div>
              <div className="search__box">
                <input type="text" placeholder="searc here..." />
                <span>
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <div className="admin__nav-top-rigth">
                <span>
                  <i className="bi bi-bell"></i>
                </span>
                <span>
                  <i className="bi bi-gear"></i>
                </span>
                <span className="profile">
                  <img
                    src={currentUser ? currentUser?.photoURL : userIcon}
                    alt="user"
                    onClick={toggleProfileActions}
                  />{" "}
                  <div className="profile__actions p-1" ref={profileActionsRef}>
                    {currentUser ? (
                      <div
                        className="text-center p-2 w-100 profile-hover"
                        onClick={logout}
                      >
                        Logout
                      </div>
                    ) : (
                      <div className="d-flex flex-column  w-100">
                        <div className="p-2 profile-hover w-100 d-flex align-items-center justify-content-center">
                          <Link to="/signup">SignUp</Link>
                        </div>
                        <div className="p-2 profile-hover w-100 d-flex align-items-center justify-content-center">
                          <Link to="/login">Login</Link>
                        </div>
                        <div className="p-2 profile-hover w-100 d-flex align-items-center justify-content-center">
                          <Link to="/home">Home</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </span>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin__menu">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li key={index} className="admin__menu-item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__admin-menu" : ""
                      }
                    >
                      {item.dispaly}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AdminNav;
