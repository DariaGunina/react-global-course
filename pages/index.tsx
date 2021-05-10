import React from 'react';
import {Header} from "../src/components/Header";
import {Footer} from "../src/components/Footer";
import {HomeContainer} from "../src/components/MovieContainer/HomeContainer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <HomeContainer />
            <Footer/>
        </>
    )
};

export default HomePage;