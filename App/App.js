import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Terms from './Terms';
import Guarantee from './Guarantee';
import Policy from './Policy';
import Locate from './Locate';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route exact path='/Terms' component={Terms} />
                  <Route exact path='/Guarantee' component={Guarantee} />
                  <Route exact path='/Policy' component={Policy} />
                  <Route exact path='/Locate' component={Locate} />
                  <Route exact path='/Contact' component={Contact} />
               </Switch>
               <Footer />
            </div>
         </Router>
      );
   }
}
export default App;