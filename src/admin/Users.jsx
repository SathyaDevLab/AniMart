import React from "react";
import { Col, Container, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { motion } from "framer-motion";
import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Loader from "../components/component/Loader";

const Users = () => {
  const { data: userData, loading } = useGetData("users");
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("Deleted!");
  };

  return (
    <section>
      <Container>
        <Row className="my-3">
          <Col lg="12" className="">
           <div className=" table-responsive">
           <table className="table">
              <thead>
                <tr className=" text-center text-nowrap">
                  <th>Image</th>
                  <th>User Name</th>
                  <th>Email</th>
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
                ) : userData.length > 0 ? (
                  userData.map((user) => (
                    <tr className="text-center align-middle" key={user.id}>
                      <td>
                        <img src={user.photoURL} alt="" />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <motion.span
                          whileTap={{ scale: 1.5 }}
                          style={{
                            cursor: "pointer",
                            fontSize: "25px",
                            color: "red",
                          }}
                          onClick={() => deleteUser(user.id)}
                        >
                          <i className="bi bi-trash3"></i>
                        </motion.span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className=" text-center align-middle">
                    <td colSpan={5}>No users are added</td>
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

export default Users;
