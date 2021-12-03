import React from 'react';
import './Brand.css';
import { atlassian, dropbox, google, shopify, slack } from './imports';
const Brand = () => {
    return (
       <div className="gpt3__brand container">
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={atlassian} alt="" />
            </div>
       </div>
    );
};

export default Brand;