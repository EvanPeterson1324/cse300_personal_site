import React from 'react';

const SocialMediaList = () => {
    return (
            <ul className="social-media-list">
                <li className="social-media-list-item">
                    <a className="icon-link" href="https://github.com/EvanPeterson1324/"> 
                        <i className="fab fa-github icon" ></i>
                    </a>
                </li>
                <li className="social-media-list-item"> 
                <a className="icon-link" href="https://www.linkedin.com/in/evanpeterson1324/">
                        <i className="fab fa-linkedin icon"></i> 
                    </a>
                </li>
                <li className="social-media-list-item"> 
                    <a className="icon-link" href="https://twitter.com">
                        <i className="fab fa-twitter icon"></i> 
                    </a>
                </li>
                <li className="social-media-list-item"> 
                    <a className="icon-link" href="https://youtube.com">
                        <i className="fab fa-youtube icon"></i> 
                    </a>
                </li>
            </ul>
    );
};

export default SocialMediaList;
