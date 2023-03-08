import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function EditCourse(props) {
  const courseId = props.editId;
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`https://e-learning-app-i5dn.onrender.com/course/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, [courseId]);
  console.log(course);

  const [title, setTitle] = useState(course.title);
  const [price, setPrice] = useState(course.price);
  const [category, setCategory] = useState(course.category);
  const [rating, setRating] = useState(course.rating);
  const [description, setDescription] = useState(course.description);

  const {
    handleSubmit,
  } = useForm();

  const handleEditDataSubmit = () => {
    const courseData = {
      title,
      price,
      category,
      rating,
      description,
    };

    fetch(`https://e-learning-app-i5dn.onrender.com/${props.editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((response) => response.json())
      .then((newData) => {
        toast("Course Edited Successful");
        console.log("update success ", newData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Course
        </Modal.Title>
      </Modal.Header>
      <div>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleEditDataSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label className="fw-bold">Title</Form.Label>
              <Form.Control
                className="remove-focus"
                size="lg"
                type="text"
                defaultValue={course.title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={false}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control
                className="remove-focus"
                size="lg"
                type="text"
                defaultValue={course.price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Category</Form.Label>
              <Form.Control
                className="remove-focus"
                size="lg"
                type="text"
                defaultValue={course.category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Rating</Form.Label>
              <Form.Control
                className="remove-focus"
                size="lg"
                type="text"
                defaultValue={course.rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Image</Form.Label>
              <Form.Control
                className="remove-focus"
                type="file"
                size="lg"
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control
                className="remove-focus"
                as="textarea"
                rows={5}
                defaultValue={course.description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ resize: "none" }}
              />
            </Form.Group>

            <Button
              size="lg"
              variant="primary"
              type="submit"
              style={{ width: "100%" }}
            >
              Submit Course
            </Button>
          </Form>
        </Modal.Body>
      </div>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCourse;
