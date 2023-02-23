import React, {useContext} from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {logInUser, signInWithGoogle, signInWithFacebook} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Login form
  const handleLoginSubmit = (data) => {
    logInUser(data.email, data.password)
    .then(userCredential =>{
      console.log(userCredential.user);
      toast.success("Login Successfull");
      navigate('/');
    })
    .catch(error =>{
      console.log(error.message);
    })
  };

  return (
    <div style={{ background: "#EDF0F2" }}>
      {/* Login page Header */}
      <PagesHeader title="Login" sub="Login" />

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
                {/* Form header and login Form data */}
                <h2 className="fs-2 mb-4" style={{fontFamily: 'Merriweather'}}>Hi, Welcome back!</h2>
                <Form onSubmit={handleSubmit(handleLoginSubmit)}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                    className="remove-focus"
                      size="lg"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
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
                  <Link to="/resetPassword">
                    <p>Forgot Password?</p>
                  </Link>
                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Sign In
                  </Button>
                </Form>
                <div className="d-flex justify-content-between mt-4">
                <Button
                    variant="primary"
                    style={{ width: "45%" }}
                    onClick={signInWithGoogle}
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
                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <Link to="/register">Register Now</Link>
                </p>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
