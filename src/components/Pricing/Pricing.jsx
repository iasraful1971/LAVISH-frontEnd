import React from 'react';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Pricing.css';

const Pricing = () => {
    return (
        <>
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div className="pricing__section">
               <div className="pricing__wrapper">
                   <h1 className="pricing__heading">
                       Pricing
                   </h1>
                   <div className="pricing__container">
                            <Link to="/sign-up" className="pricing__container-card">
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <FaFire/>
                                            <h3>Starter</h3>
                                            <h4>$8.88</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>100 transitions</li>
                                                <li>2% Cash Back</li>
                                                <li>$10,00 limit</li>
                                            </ul>
                                            <Button  buttonSize="btn-wide" buttonColor="primary">Choose plan</Button>
                                        </div>
                                    </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <BsXDiamondFill/>
                                            <h3>Golden</h3>
                                            <h4>$12.88</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>80 transitions</li>
                                                <li>3% Cash Back</li>
                                                <li>$10,00 limit</li>
                                            </ul>
                                            <Button  buttonSize="btn-wide" buttonColor="primary" style={{background:'red'}}>Choose plan</Button>
                                        </div>
                                    </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <GiCrystalize/>
                                            <h3>Diamond</h3>
                                            <h4>$90.88</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>100 transitions</li>
                                                <li>10% Cash Back</li>
                                                <li>$30,00 limit</li>
                                            </ul>
                                            <Button  buttonSize="btn-wide" buttonColor="primary">Choose plan</Button>
                                        </div>
                                    </div>
                            </Link>
                            {/* <Link to="/sign-up" className="pricing__container-card">
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <iconContext/>
                                            <h3>Cristyal</h3>
                                            <h4>$90.88</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>100 transitions</li>
                                                <li>10% Cash Back</li>
                                                <li>$30,00 limit</li>
                                            </ul>
                                            <Button  buttonSize="btn-wide" buttonColor="primary">Choose plan</Button>
                                        </div>
                                    </div>
                            </Link> */}
                   </div>

                </div> 
        </div>
        </IconContext.Provider>
        </>
    );
};

export default Pricing;