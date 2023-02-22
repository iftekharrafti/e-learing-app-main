import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { AuthContext } from "../../contexts/AuthProvider";
import "../RemoveFocus.css";

const Register = () => {
  const [signUpError, setSignUpError] = useState("");
  const { registerUser, updateUser, signInWithGoogle, signInWithFacebook } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Get form data and create user
  const handleRegisterSubmit = (data) => {
    const fullName = data.firstName + " " + data.lastName;
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Created Successfully");
        saveUser(fullName, data.email);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((error) => {
        setSignUpError(error.message);
        reset();
      });
  };

  // Save user Data in Database
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://e-learning-app-i5dn.onrender.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div style={{ background: "#EDF0F2" }}>
      {/* Login page Header */}
      <PagesHeader title="Student Registration" sub="Student Registration" />

      <Container>
        <Row>
          <div
            className="d-flex justify-content-center my-5"
            style={{ width: "100%" }}
          >
            <Col md={6}>
              <div
                style={{
                  background: "#fff",
                  padding: "60px 50px",
                  borderRadius: "20px",
                }}
              >
                {/* Register Form data */}
                <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label
                      style={{ fontFamily: "Lato" }}
                      className="fw-bold"
                    >
                      First Name
                    </Form.Label>
                    <Form.Control
                      className="remove-focus"
                      size="lg"
                      type="text"
                      {...register("firstName", { required: true })}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label
                      style={{ fontFamily: "Lato" }}
                      className="fw-bold"
                    >
                      Last Name
                    </Form.Label>
                    <Form.Control
                      className="remove-focus"
                      size="lg"
                      type="text"
                      {...register("lastName", {
                        required: true,
                      })}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                      style={{ fontFamily: "Lato" }}
                      className="fw-bold"
                    >
                      E-Mail
                    </Form.Label>
                    <Form.Control
                      className="remove-focus"
                      size="lg"
                      type="email"
                      {...register("email", {
                        required: true,
                      })}
                      placeholder="E-Mail"
                    />
                    {errors.lastName && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label
                      style={{ fontFamily: "Lato" }}
                      className="fw-bold"
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      className="remove-focus"
                      size="lg"
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="text-danger">
                        Password Must be atleast 6 characters
                      </span>
                    )}
                  </Form.Group>

                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Register
                  </Button>
                  {signUpError && (
                    <p className="text-danger">User Already exists</p>
                  )}
                </Form>
                <div className="d-flex justify-content-between mt-4">
                  <Button
                    variant="primary"
                    onClick={signInWithGoogle}
                    style={{ width: "45%" }}
                  >
                    Continue With Google
                  </Button>
                  <Button
                    variant="primary"
                    style={{ width: "45%" }}
                    onClick={signInWithFacebook}
                  >
                    Continue With Facebook
                  </Button>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
