import React from 'react';
import Nav from './nav';
import Rating from './rating';
import Review from './reviews';
import Analysis from './analysis';
import Visitors from './visitors';


class App extends React.Component {
    render() { 
        return ( 
            <div className="container">
                <Nav />
                <div className="right">
                <Review />
                <Rating />
                <Analysis />
                <Visitors />
                </div>
            </div>
         );
    }
}
 
export default App;
