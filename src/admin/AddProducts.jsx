import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { toast } from "react-toastify";
import { db, storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import Loader from "../components/component/Loader";

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("chair");
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const docRef = collection(db, "products");
        const storageRef = ref(
          storage,
          `productImages/${Date.now() + productImage.name}`
        );

        const uploadTask = uploadBytesResumable(storageRef, productImage);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            toast.error("Image upload failed: " + error.message);
            setLoading(false);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              await addDoc(docRef, {
                title: productTitle,
                shortDesc: shortDescription,
                description: description,
                category: category,
                price: parseFloat(price),
                imgUrl: downloadURL,
              });
              toast.success("Product successfully added");
              setProductTitle("");
              setShortDescription("");
              setDescription("");
              setPrice("");
              setCategory("chair");
              setProductImage(null);
              naviagte("/dashboard/all-products");
            } catch (error) {
              toast.error("Failed to add product: " + error.message);
            } finally {
              setLoading(false);
            }
          }
        );
      } catch (error) {
        toast.error("Error: " + error.message);
        setLoading(false);
      }
    }
  };

  return (
    <section>
      <Container>
        <Row className="my-4">
          <Col lg="12">
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
                <textarea
                  rows="5"
                  placeholder="e.g., Product description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <p className="error-text">{errors.description}</p>
                )}
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between gap-1 gap-sm-5">
                <FormGroup className="form__group w-50">
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="e.g., 2000"
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
                    <option>Select Category</option>
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

              <button
                type="submit"
                className="shop__btn my-2"
                disabled={loading}
              >
                {loading ? "Adding Product..." : "Add Product"}
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      {loading && <Loader />}
      <style jsx>{`
        .form__group {
          margin-bottom: 1rem;
        }

        .form__group input,
        .form__group select,
        .form__group textarea {
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

        .shop__btn {
          padding: 10px 20px;
          background-color: var(--primary-color);
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .shop__btn:hover {
          background-color: var(--primary-color-dark);
          color: var(--primary-color);
        }

        .shop__btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default AddProduct;
