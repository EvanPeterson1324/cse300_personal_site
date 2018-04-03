import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../images/headshot.jpg'
import '../css/headshotImg.css';
const Sidebar = () => {
    return (
        <div className='side-bar'>
            <img className="headshot-img" src={headshot} />
            <ul className="route-list">
                <li><Link className="side-bar-link" to="/">About</Link></li>
                <li><Link className="side-bar-link" to="/experience">Experience</Link></li>
                <li><Link className="side-bar-link" to="/education">Education</Link></li>
                <li><Link className="side-bar-link" to="/skills">Skills</Link></li>
                <li><Link className="side-bar-link" to="/hobbies">Hobbies</Link></li>
                <li><Link className="side-bar-link" to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
