import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../styles/dashboard.css";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: productData } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <section>
      <Container>
        <Row className="my-5 d-flex">
          <Col lg="3" className="my-2">
            <div className="revenue__box">
              <h5>Total Sales</h5>
              <span>$7890</span>
            </div>
          </Col>
          <Col lg="3" className="my-2">
            <div className="order__box">
              <h5>Orders</h5>
              <span>$7890</span>
            </div>
          </Col>
          <Col lg="3" className="my-2">
            <div className="products__box">
              <h5>Total Products</h5>
              <span>{productData.length}</span>
            </div>
          </Col>
          <Col lg="3" className="my-2">
            <div className="users__box">
              <h5>Users</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
