import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './RouteContentComponents/About';
import Experience from './RouteContentComponents/Experience';
import Education from './RouteContentComponents/Education';
import Skills from './RouteContentComponents/Skills';
import Hobbies from './RouteContentComponents/Hobbies';
import Contact from './RouteContentComponents/Contact';

/**
 * This component is the container for our React Router routes.
 */
class RouteContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }    
    }

    render() {
        return (
            <div className="container-fluid content-container">
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/education" component={Education} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/hobbies" component={Hobbies} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default RouteContentContainer;
