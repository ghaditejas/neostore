import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Side_menu from './Side_menu';

class Profile extends Component{
  render(){
    var  styling = {
          height: "200px",
          width: "200px !important"
        };
    return (
          <div className="container">
    <div className="container-fluid">
      <div className="col-md-12">
        <h4> My Account </h4>
        <hr />
      </div>

      <Side_menu />

      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>Profile</h2>
            <hr />
          </div>
          <div className="panel-body">
            <table className="table">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>Test</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>User</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>15/03/1993</td>
                </tr>
                <tr>
                  <th>Mobile Number</th>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>test.user@neosofttech.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="panel-footer">
            <hr />
            <Link to="/Profile_edit" type="button" className="btn btn-default btn-lg">Edit</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
  }
}
export default Profile;