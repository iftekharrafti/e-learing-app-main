import React from 'react';
import CounterUp from '../../../Components/CounterUp/CounterUp';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HomeCourses from '../HomeCourses/HomeCourses';
import HomeInstructors from '../HomeInstructors/HomeInstructors';
import HomeOffer from '../HomeOffer/HomeOffer';
import Students from '../Students/Students';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="text-bg-primary">
                <CounterUp />
            </div>
            <Categories />
            <HomeCourses />
            <Students />
            <HomeOffer />
            <HomeInstructors />
        </div>
    );
};

export default Home;