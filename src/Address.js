import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Side_menu from './Side_menu';

 class Address extends Component{
  render(){
    var  styling = {
          height: "200px",
          width: "200px !important"
        };
    return (
      <div  className="container">
    <div  className="container">
      <div  className="container-fluid">
        <div  className="col-md-12">
          <h4> My Account </h4>
          <hr />
        </div>

       <Side_menu />
       
        <div  className="col-md-9">
          <div  className="panel panel-default">
            <div  className="panel-heading">
              <h3>Addresses</h3>
              <hr />
            </div>
            <div  className="panel-body">
                <div  className="panel panel-default">
                    <div  className="panel-body">
                        <p>IT Sigma Park, Rabale</p>
                        <p>Thane-400614</p>
                        <p>Maharashtra</p>
                        <p>India</p>
                    </div>
                    <div  className="panel-footer">
                        <input type="radio" name="address" /> Select
                        <a href="./edit-address.html" type="button"  className=" btn-default"><i  className="fa fa-pencil"></i> Edit</a>
                    </div>
                </div>
            </div>            
            <div  className="panel-footer">
              <hr />
              <Link to="/Address_add" type="button"  className="btn btn-default btn-lg">Add new</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

      );
  }
}
export default Address;