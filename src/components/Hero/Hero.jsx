import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/svg-4.svg';
import { Button } from '../Button/Button';
import './Hero.css';

const Hero = ({
    lightBg , topLine , lightText , lightTextDesc, headline, description , buttonLabel, alt , imgStart
}) => {
    return (
        
        <>
         <div className={lightBg ? 'home__hero-section': 'home__hero-section darkBg'}>
             <div className="container">
                 <div className="row home__hero-row"
                    style={{display:'flex' , flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
                 >
                     <div className="col">
                         <div className="home__hero-text-wrapper">
                             <p className="top-line">
                                 {topLine}
                                 </p>
                                 <h1 className={lightText ? 'heading' :'heading dark'}>{headline}</h1>
                                 <p className={lightTextDesc ? 'home__hero-subtitle': 'home__hero-subtitle dark'}>{description}</p>
                                 <Link to="/sign-up">
                                     <Button buttonSize="btn-wide" buttonColor="blue">{buttonLabel}</Button>
                                 </Link>
                             
                          </div>
                     </div>
                     <div className="col">
                         <div className="home__hero-img-wrapper">
                             <img src={img1} className="home__hero-img" alt={alt} />
                         </div>
                     </div>

                 </div>
             </div>
         </div>   
        </>
    
    );
};

export default Hero;