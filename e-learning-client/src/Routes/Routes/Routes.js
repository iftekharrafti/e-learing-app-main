import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Bookmark from "../../pages/Bookmark/Bookmark";
import Cart from "../../pages/Cart/Cart";
import Contact from "../../pages/Contact/Contact";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import InstructorDetails from "../../pages/InstructorDetails/InstructorDetails";
import Instructors from "../../pages/Instructors/Instructors";
import Notices from "../../pages/Notices/Notices";
import Login from "../../pages/Register/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import AddInstructor from '../../pages/Dashboard/AddInstructor/AddInstructor';
import MyCourses from "../../pages/Dashboard/MyCourses/MyCourses";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AddCourse from "../../pages/Dashboard/AddCourse/AddCourse";
import AdminRoute from "../AdminRoute/AdminRoute";
import MyProfile from "../../pages/Dashboard/MyProfile/MyProfile";
import NoticeDetails from "../../pages/Notices/NoticeDetails/NoticeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/course/:courseId',
                element: <CourseDetails />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: '/instructor/:instructorId',
                element: <InstructorDetails />
            },
            {
                path: '/notice',
                element: <Notices />
            },
            {
                path: '/notice/:noticeId',
                element: <NoticeDetails />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/bookmark',
                element: <Bookmark />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyCourses />
            },
            {
                path: '/dashboard/profile',
                element: <MyProfile />
            },
            {
                path: '/dashboard/addInstructor',
                element: <AdminRoute><AddInstructor /></AdminRoute>  
            },
            {
                path: '/dashboard/addCourse',
                element: <AdminRoute><AddCourse /></AdminRoute> 
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute> 
            },
        ]
    }
])

export default router;