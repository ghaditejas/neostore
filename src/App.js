import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Terms from './Terms';
import Guarantee from './Guarantee';
import Policy from './Policy';
import Locate from './Locate';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Orders from './Orders';
import Address from './Address';
import Profile_edit from './Profile_edit';
import Address_add from './Address_add';
import Featured_products from './Featured_products';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route exact path='/' component={Featured_products} />
                  <Route exact path='/Terms' component={Terms} />
                  <Route exact path='/Guarantee' component={Guarantee} />
                  <Route exact path='/Policy' component={Policy} />
                  <Route exact path='/Locate' component={Locate} />
                  <Route exact path='/Contact' component={Contact} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Register' component={Register} />
                  <Route exact path='/Profile' component={Profile} />
                     <Route exact path='/Profile_edit' component={Profile_edit} />
                  <Route exact path='/Orders' component={Orders} />
                  <Route exact path='/Address' component={Address} />
                     <Route exact path='/Address_add' component={Address_add} />
               </Switch>
               <Footer />
            </div>
         </Router>
      );
   }
}
export default App;