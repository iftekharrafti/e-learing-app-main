import React from 'react';
import { Outlet } from 'react-router-dom';
import ScroolIcon from '../Components/ScroolIcon/ScroolIcon';
import Footer from '../pages/Shared/Footer';
import MainNavbar from '../pages/Shared/MainNavbar';
import TopNavbar from '../pages/Shared/TopNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar />
            <MainNavbar />
            <Outlet />
            <ScroolIcon />
            <Footer />
        </div>
    );
};

export default Main;