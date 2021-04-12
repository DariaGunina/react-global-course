import React from 'react';
import {Mode, MovieContainer} from '../../components/MovieContainer';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

export const HomePage = () => {
    return (
       <>
           <Header  />
           <MovieContainer mode={Mode.HOME} />
           <Footer />
       </>
    );
};