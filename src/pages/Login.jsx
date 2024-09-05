import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setLoading(false);
      toast.success("Login successful! Welcome back!");
      resetForm();
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <Helmet title={"Login"}>
      <section>
        <Container>
          <Row className="my-3">
            <Col lg="5" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-3">Login</h3>
              <Form className="auth__form d-flex flex-column gap-2" onSubmit={signIn}>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <div>
                  <button className="buy__btn auth__btn" type="submit">
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <p className="">
                  Don't have an account?{" "}
                  <Link to={"/signup"}>Create an account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
