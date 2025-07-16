import React from 'react';
import Hero from './hero';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';


import Openaccount from '../openaccount';
import Stats from './Stats';

function Homepage() {
    return (  
        <>
       
       <Hero/>
       <Trust/>
       <Stats/>
       <Pricing/>
       <Education/>
       <Openaccount/>
       
        </>
    );
}

export default Homepage ;