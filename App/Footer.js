import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Footer extends Component {
	render(){
		return(
				<div>
					  <footer className="footer">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4">
          <h3>About Company</h3>
          <div>
            <p>NeoSOFT Technologies is here at your quick and easy service for shooping .</p>
            <h6>Contact information</h6>
            <p>Email: contact@neosofttech.com</p>
            <p>Phone: +91 0000000000</p>
            <p>MUMBAI, INDIA</p>
          </div>
        </div>

        <div className="col-md-4">
          <h3>Information</h3>
          <ul className="list-unstyled">
            <li><Link to="/Terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/Guarantee">Guarantee &amp; Return Policy</Link></li>
            <li><Link to="/Contact">Contact us</Link></li>
            <li><Link to="/Policy">Privacy Policy</Link></li>
            <li><Link to="/Locate">Locate Us</Link></li>
          </ul>
        </div>

        <div className="col-md-4">
          <h3>Newsletter</h3>
          <form>
            <div>
              <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="your email..." />
              </div>
              <button type="button" tooltip="Coming Soon" className="btn btn-default">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

    </div>

    <div className="container">
      <p className="copywrite text-center">Copyright © 2017 NeoSOFT Technologies All rights reserved | Design by <a href="http://www.neosofttech.com/">NeoSOFT Technologies</a></p>
    </div>
  </footer>
				</div>
			);
	}
}

export default Footer;