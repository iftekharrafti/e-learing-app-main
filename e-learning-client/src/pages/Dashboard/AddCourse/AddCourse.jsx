import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const imgbbHostKey = process.env.REACT_APP_imgbb_key;

  // Get all data in the form and send it to the database
  const handleAddCouse = (data) =>{
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);

    // Send image in the imgbb and get the image link
    const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      // took all data and create a object that send to the database
      if(imgData.success){
        const course = {
          title: data.title,
          img: imgData.data.url,
          description: data.description,
          category: data.category,
          price: data.price,
          rating: data.rating
        }

        // Save instructor information to the database
        fetch("http://localhost:5000/courses",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(course)
        })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          toast.success('Course Added Successfully')
          reset()
        })
      }
    })
  }

  return (
    <div className="shadow rounded" style={{background: "#fff"}}>
      <h2 className="fs-2 fw-bold text-center pt-4" style={{fontFamily: 'Merriweather'}}>Add course</h2>
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
              {/* Course Form */}
              <Form onSubmit={handleSubmit(handleAddCouse)}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label className="fw-bold">Title</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Title"
                  />
                  {errors.title && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label className="fw-bold">Price</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("price", {
                      required: true,
                    })}
                    placeholder="Price"
                  />
                  {errors.price && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Category</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("category", {
                      required: true,
                    })}
                    placeholder="Category"
                  />
                  {errors.category && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Rating</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    {...register("rating", {
                      required: true,
                    })}
                    placeholder="Rating"
                  />
                  {errors.rating && (
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
                    placeholder="Image"
                  />
                  {errors.img && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Description</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    as="textarea"
                    rows={5}
                    {...register("description", {
                      required: true,
                    })}
                    placeholder="Description"
                    style={{resize: 'none'}}
                  />
                  {errors.description && (
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

export default AddCourse;
