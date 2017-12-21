import React, { Component } from 'react';

class Register extends Component{
	render(){
		return (
      <div className="container">
    <div className="container-register">
      <div className="col-md-5">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="text-center text-muted">Register to NeoSTORE</h2>
          </div>
          <div className="panel-body">
            <p className="text-muted text-center">EASILY USING</p>
            <button className="btn btn-default btn-lg">
              <i className="fa fa-facebook fa-lg  text-primary" ></i>
              Facebook
            </button>
            <button className="btn btn-default btn-lg pull-right">
              <i className="fa fa-google fa-lg text-danger"></i>
              Google
            </button>

            <p className="text-muted text-center">--OR USING--</p>

            <form className="form-custom" autocomplete="on" novalidate>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email Address" />
                <small className="text-danger">Please enter valid email</small>

                <input type="password" className="form-control" placeholder="Choose Password" />
                <small className="text-danger">Please enter valid password</small>

                <input type="password" className="form-control" placeholder="Confirm Password" />
                <small className="text-danger">Password does not matches</small>

                <input type="number" className="form-control" placeholder="Enter Phone Number" />
                <small className="text-danger">Please enter phone number</small>

                <legend className="gender-legend">I'm</legend>
                <div className="checkbox">
                  <label><input type="radio" value="male" name="gender" /> <strong>Male</strong> </label>
                  <label><input type="radio" value="female" name="gender" /> <strong>Female</strong> </label>
                </div>
                <small className="text-danger">Please select</small>

                <button type="submit" className="btn btn-lg btn-primary btn-block">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
			);
	}
}
export default Register;