import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddInstructor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const imageHostingKey = process.env.REACT_APP_imgbb_key;

  const handleInstructor = (data) =>{
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?&key=${imageHostingKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(imgData =>{
      if(imgData.success){
        const instructor = {
          name: data.name,
          email: data.email,
          img: imgData.data.url,
          subject: data.subject,
          number: data.number,
          about: data.about,
          Degree: data.Degree,
          education: data.education,
          experience: data.experience
        }
        fetch('http://localhost:5000/instructors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(instructor)
        })
        .then(res => res.json())
        .then(result => {
          toast.success(`${data.name} added successfully`)
          reset()
        })
      }
    })
    
  }

  return (
    <div className="shadow rounded" style={{background: "#fff"}}>
      <h2 className="fs-2 fw-bold text-center pt-4">Add Instructor</h2>
      <Row>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <Col md={8}>
            <div
              style={{
                padding: "40px 20px",
                borderRadius: "20px",
              }}
            >
              
              <Form onSubmit={handleSubmit(handleInstructor)}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("email", {
                      required: true,
                    })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Subject</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("subject", {
                      required: true,
                    })}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Number</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("number", {
                      required: true,
                      
                    })}
                    placeholder="Number"
                  />
                  {errors.number && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Image</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    type="file"
                    size="lg"
                    {...register("img", {
                      required: true,
                      
                    })}
                  />
                  {errors.img && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Education</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    as="textarea"
                    rows={3}
                    {...register("education", {
                      required: true,
                      
                    })}
                    placeholder="Education"
                    style={{resize: 'none'}}
                  />
                  {errors.education && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Experience</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    as="textarea"
                    rows={3}
                    {...register("experience", {
                      required: true,
                      
                    })}
                    placeholder="Experience"
                    style={{resize: 'none'}}
                  />
                  {errors.experience && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Degree</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    as="textarea"
                    rows={3}
                    {...register("Degree", {
                      required: true,
                      
                    })}
                    placeholder="Degree"
                    style={{resize: 'none'}}
                  />
                  {errors.Degree && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">About</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    as="textarea"
                    rows={3}
                    {...register("about", {
                      required: true,
                    })}
                    placeholder="About"
                    style={{resize: 'none'}}
                  />
                  {errors.about && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>

                <Button
                  size="lg"
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Add Course
                </Button>
              </Form>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default AddInstructor;
