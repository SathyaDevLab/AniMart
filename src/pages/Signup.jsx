import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import "../styles/login.css";
import Loader from "../components/component/Loader";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username.trim()) {
      toast.error("Username is required");
      return false;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!password || password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setFile(null);
  };

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDataUpload = async (downloadURL = null) => {
        await updateProfile(user, {
          displayName: username,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: username,
          email,
          photoURL: downloadURL,
        });
        setLoading(false);
        toast.success(
          "Your account has been successfully created! Welcome aboard!"
        );
        resetForm();
        navigate("/login");
      };

      if (file) {
        const storageRef = ref(storage, `image/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            toast.error("Upload failed: " + error.message);
            setLoading(false);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await userDataUpload(downloadURL);
          }
        );
      } else {
        await userDataUpload();
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        "Oops! Something went wrong. Please check your credentials and try again."
      );
    }
  };

  return (
    <Helmet title={"SignUp"}>
      <section>
        <Container>
          <Row className="my-3">
            <Col lg="5" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-3">SignUp</h3>
              <Form
                className="auth__form d-flex flex-column gap-2"
                onSubmit={signUp}
              >
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <div>
                  <button className="buy__btn auth__btn" type="submit">
                    {loading ? "Creating..." : "Create an Account"}
                  </button>
                </div>
                <p className="">
                  Already have an account?{" "}
                  <Link to={"/login"} className="fw-bold">
                    Login
                  </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
        {loading && <Loader />}
      </section>
    </Helmet>
  );
};

export default Signup;
