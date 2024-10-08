import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Loader from "../components/component/Loader";

const AllProducts = () => {
  const { data: productData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  return (
    <section>
      <Container>
        <Row className="my-3">
          <Col lg="12">
          <div className=" table-responsive">
          <table className=" table">
              <thead>
                <tr className=" text-center text-nowrap">
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    {" "}
                    <td className="text-center align-middle" colSpan={5}>
                      <h4 className=" justify-content-center">Loading...</h4>
                    </td>
                  </tr>
                ) : productData.length > 0 ? (
                  productData.map((product) => (
                    <tr className="text-center align-middle" key={product.id}>
                      <td>
                        <img src={product.imgUrl} alt="" />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>
                        <motion.span
                          whileTap={{ scale: 1.5 }}
                          style={{
                            cursor: "pointer",
                            fontSize: "25px",
                            color: "red",
                          }}
                          onClick={() => deleteProduct(product.id)}
                        >
                          <i className="bi bi-trash3"></i>
                        </motion.span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className=" text-center align-middle">
                    <td colSpan={5}>No items are added</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          </Col>
        </Row>
      </Container>
      {loading && <Loader />}
    </section>
  );
};

export default AllProducts;
