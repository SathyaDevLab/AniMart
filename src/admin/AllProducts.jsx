import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";

const AllProducts = () => {
  const [productTitle, setProductTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("chair");
  const [productImage, setProductImage] = useState(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!productTitle.trim()) {
      newErrors.productTitle = "Product title is required.";
    }

    if (!shortDescription.trim()) {
      newErrors.shortDescription = "Short description is required.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (!price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(price) || price <= 0) {
      newErrors.price = "Please enter a valid price.";
    }

    if (!productImage) {
      newErrors.productImage = "Product image is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        productTitle,
        shortDescription,
        description,
        price,
        category,
        productImage,
      };

      console.log("Form data: ", formData);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="my-3">Add Product</h4>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="form__group">
                <label>Product Title</label>
                <input
                  type="text"
                  placeholder="e.g., Double sofa"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
                {errors.productTitle && (
                  <p className="error-text">{errors.productTitle}</p>
                )}
              </FormGroup>

              <FormGroup className="form__group">
                <label>Short Description</label>
                <input
                  type="text"
                  placeholder="e.g., short note..."
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                />
                {errors.shortDescription && (
                  <p className="error-text">{errors.shortDescription}</p>
                )}
              </FormGroup>

              <FormGroup className="form__group">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="e.g., Product description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <p className="error-text">{errors.description}</p>
                )}
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="e.g., $2000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {errors.price && <p className="error-text">{errors.price}</p>}
                </FormGroup>

                <FormGroup className="form__group w-50">
                  <label>Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <FormGroup className="form__group">
                <label>Product Image</label>
                <input
                  type="file"
                  onChange={(e) => setProductImage(e.target.files[0])}
                />
                {errors.productImage && (
                  <p className="error-text">{errors.productImage}</p>
                )}
              </FormGroup>

              <button type="submit" className="shop__btn mt-2 mb-5">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>

      <style>{`
        .form__group {
          margin-bottom: 1rem;
        }

        .form__group input,
        .form__group select {
          border: 1px solid var(--card-bg-02);
          padding: 10px 15px;
          width: 100%;
          border-radius: 10px;
        }

        .form__group label {
          font-weight: bold;
          margin-bottom: 0.5rem;
          display: block;
        }

        .error-text {
          color: red;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
      `}</style>
    </section>
  );
};

export default AllProducts;
