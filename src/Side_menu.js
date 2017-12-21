import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Side_menu extends Component{
  render(){
    var  styling = {
          height: "200px",
          width: "200px !important"
        };
    return (
        <div className="col-md-3">
          <img src="http://soeasyloansonline.com.au/img/testimonial/noimg.png" 
               className="img-responsive img-circle profile" alt="profile_pic" 
               style={styling} />
      
          <div className="text-center">
            <br />
            <div className="text-danger"><strong>Test User</strong></div>
          </div>
          <br />
          <ul className="nav">
            <li><Link to="/Orders" ><i className="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders</Link></li>
          <li><Link to="/Profile" ><i className="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile</Link></li>
          <li><Link to="/Address" ><i className="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address</Link></li>
          </ul>
        </div>

      );
  }
}
export default Side_menu;