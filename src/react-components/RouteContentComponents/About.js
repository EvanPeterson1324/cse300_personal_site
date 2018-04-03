import React from 'react';
import Name from '../Name';
import Subheading from '../Subheading';
import Summary from '../Summary';
import SocialMediaList from '../SocialMediaList';

const About = () => {
    return (
        <div className="route-content-container about">
            <Name />
            <Subheading />
            <Summary />
            <SocialMediaList />
        </div>
    );     
};

export default About;
