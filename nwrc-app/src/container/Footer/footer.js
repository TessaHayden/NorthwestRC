import React from 'react';
import { images } from '../../constants';
import './footer.css';

const Footer = () => (
    <div className='app__footer section__padding' id='login'>
        <div className="app__footer-links">
            <h1 className="app__footer-headtext">Contact</h1>
            <p className="p__opensans">+1 503-349-7151</p>
            <p className="p__opensans">BillHayden@live.com</p>
        </div>
        <div className="app__footer-links_logo">
            <img src={images.nwrcLogo} alt="footer_logo" width="50" height="50"/>
        </div>
        <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Hours Daily</h1>
            <p className="p__opensans">09:00 am - 08:00 pm</p>
        </div>
        <div className="footer__copyright">
            <p className="p__opensans">&copy;2022 Northwest Restaurant Consultants.  All Rights reserved.</p>
        </div>
    </div>
    
);

export default Footer;