import React from 'react';
import Brand from '../../Brand/Brand';
import Hero from '../../Hero/Hero';
import Pricing from '../../Pricing/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
const Home = () => {
    return (
        <>
          <Hero {...homeObjOne}/>  
         
          <Hero {...homeObjThree}/> 
          <Hero {...homeObjTwo}/> 
          <Pricing></Pricing>
          <Hero {...homeObjFour}/>
          <Brand></Brand>
        </>
    );
};

export default Home;