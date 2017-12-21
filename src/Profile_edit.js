import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Profile_edit extends Component{
  render(){
    var  styling = {
          height: "200px",
          width: "200px !important"
        };
    return (
        <div className="container">
    <div className="container">
      <div className="container-fluid">
        <div className="col-md-12">
          <h4> My Account </h4>
          <hr />
        </div>

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

        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4><strong>Edit Profile</strong></h4>
              <hr />

              <form novalidate>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="firstName">First Name</label>
                      <input type="text" className="form-control" value="Test" />
                    </div>
                    <small className="text-danger">Please enter valid first name</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="lastName">Last Name</label>
                      <input type="text" className="form-control" value="User" />
                    </div>
                    <small className="text-danger">Please enter valid last name</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="gender">Gender</label>
                      <div className="checkbox">
                        <label><input type="radio" value="male" name="gender" checked /> <strong>Male</strong> </label>
                        <label><input type="radio" value="female" name="gender" /> <strong>Female</strong> </label>
                      </div>
                    </div>
                    <small className="text-danger">Please select gender</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="dateOfBirth">Date of Birth</label>
                      <input type="date" className="form-control" value="1993-03-15" />
                    </div>
                    <small className="text-danger">Please enter valid date</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="mobile">Mobile</label>
                      <input type="number" className="form-control" value="1234567890" />
                    </div>
                    <small className="text-danger">Please enter valid mobile number</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" value="test.user@neosofttech.com" />
                    </div>
                    <small className="text-danger">Please enter valid email</small>
                  </div>
                </div>

                <hr />
                <button type="submit" className="btn btn-default btn-lg"><i className="fa fa-floppy-o"></i>Save</button>
                <Link to="/Profile" type="button" className="btn btn-default btn-lg"><i className="fa fa-remove"></i>Cancel</Link>
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
export default Profile_edit;