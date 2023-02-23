import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PagesHeader from '../../Components/PagesHeader/PagesHeader';
import { AuthContext } from '../../contexts/AuthProvider';

const ForgotPassword = () => {
    const {resetUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

      const handleResetSubmit = (data) => {
        resetUser(data.email)
        .then(() => {
            alert('Password reset email sent successful')
        })
        .catch((err) =>{
            console.error(err);
        })
        reset();
      }

    return (
        <div style={{ background: "#EDF0F2" }}>
      {/* Reset password page Header */}
      <PagesHeader title="Reset Password" sub="Reset Password" />

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
                <h2 className="fs-2 mb-4" style={{fontFamily: 'Merriweather'}}>Reset Password</h2>
                <Form onSubmit={handleSubmit(handleResetSubmit)}>
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
                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Reset Password
                  </Button>
                </Form>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
    );
};

export default ForgotPassword;