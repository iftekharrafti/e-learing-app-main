import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import MainNavbar from "../../Shared/MainNavbar";
import TopNavbar from "../../Shared/TopNavbar";
import PagesHeader from "../../../Components/PagesHeader/PagesHeader";
import ProfilePicName from "../ProfilePicName/ProfilePicName";
import { AuthContext } from "../../../contexts/AuthProvider";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import './Dashboard.css';

const Dashboard = () => {
  const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
  return (
    <div style={{background: '#EDF0F2'}}>
      <TopNavbar />
      <MainNavbar />
      <PagesHeader title="Dashboard" sub="Dashboard" />
      <Container className="my-5">
      <ProfilePicName />
        <Row>
          <Col md={3} sm={12}>
            <div className="background rounded mb-4">
            <ul className="list-unstyled">
              <li className="mb-3">
                <NavLink className="text-decoration-none text-black fs-4 fw-bold" to="/dashboard">My Courses</NavLink>
              </li>
              <hr />
              <li className="mb-3">
                <NavLink className="text-decoration-none text-black fs-4 fw-bold" to="/dashboard/profile">My Profile</NavLink>
              </li>
              <hr />
              {isAdmin && <>
                <li className="mb-3">
                <NavLink className="text-decoration-none text-black fs-4 fw-bold" to="/dashboard/addInstructor">Add Instructor</NavLink>
              </li>
              <hr />
              <li className="mb-3">
                <NavLink className="text-decoration-none text-black fs-4 fw-bold" to="/dashboard/addCourse">Add a course</NavLink>
              </li>
              <hr />
              <li className="mb-3">
                <NavLink className="text-decoration-none text-black fs-4 fw-bold" to="/dashboard/allUsers">Users</NavLink>
              </li>
              </>}
            </ul>
            </div>
          </Col>
          <Col md={9} sm={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Dashboard;
