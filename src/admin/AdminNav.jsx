import React from "react";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/admin-nav.css";
import { NavLink } from "react-router-dom";

const admin__nav = [
  { dispaly: "Dashboard", path: "/dashboard" },
  { dispaly: "All Products", path: "/dashboard/all-products" },
  { dispaly: "Orders", path: "/dashboard/orders" },
  { dispaly: "Users", path: "/dashboard/users" },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
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
                <span>
                  <img src={currentUser?.photoURL} alt="" />
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
