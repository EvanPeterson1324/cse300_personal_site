import React, { Component }       from 'react';
import Sidebar                    from './react-components/Sidebar';
import RouteContentContainer      from './react-components/RouteContentContainer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <RouteContentContainer />
      </div>
    );
  }
}

export default App;
