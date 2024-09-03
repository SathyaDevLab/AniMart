import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductData(searchedProducts);
  };

  return (
    <Helmet title={"Shop"}>
      <CommonSection title={"Products"} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" className="pt-4">
              <div className="filter__widget">
                <select name="" id="" onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="pt-4  d-md-flex justify-content-end">
              <div className="filter__widget">
                <select name="" id="">
                  <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12" className="pt-4">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="search you want!"
                  onChange={handleSearch}
                />
                <span>
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <div
                className="d-flex align-items-center justify-content-center fs-5"
                style={{ height: "100px" }}
              >
                No product are found
              </div>
            ) : (
              <ProductList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
