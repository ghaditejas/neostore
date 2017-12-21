import React, { Component } from 'react';

class Login extends Component{
	render(){
		return (
      <div>
			<div className="container">
    <div className="container-login">
      <div className="col-md-5">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="text-center text-muted">Login to NeoSTORE</h2>
          </div>
          <div className="panel-body">
            <p className="text-muted text-center">EASILY USING</p>
            <button className="btn btn-default btn-lg"><i className="fa fa-facebook fa-lg  text-primary" ></i>Facebook</button>
            <button className="btn btn-default btn-lg pull-right"><i className="fa fa-google fa-lg text-danger"></i>Google</button>

            <p className="text-muted text-center">--OR USING--</p>

            <form className="form-custom" >
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" />
                <small className="text-danger" >Please enter valid email</small>

                <input type="password" className="form-control" placeholder="Password" />
                <small className="text-danger" >Please enter valid password</small>
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

			);
	}
}
export default Login;