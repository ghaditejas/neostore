import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

 class Address_add extends Component{
  render(){
    return (
      <div className="container">
    <div className="container">
      <div className="container-fluid">
        <div className="col-md-12">
          <h4> My Account </h4>
          <hr />
        </div>

        <div className="sidebar col-md-3">
          <p><small>ORDERS</small></p>
          <p><li><Link to="/Orders" ><i className="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders</Link></li></p>
          <hr />
          <p><small>ACCOUNT</small></p>
          <p><li><Link to="/Profile" ><i className="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile</Link></li></p>
          <p><li><Link to="/Address" ><i className="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address</Link></li></p>
        </div>

        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4><strong>Add new address</strong></h4>
              <hr />

              <button type="button" className="btn btn-default"><i className="fa fa-map-marker"></i> Set Current Location</button>
              <br />
              <br />
              <form  noValidate>

                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group">
                      <label htmlFor="fulladdress">Address</label>
                      <textarea type="text" className="form-control"></textarea>
                    </div>
                    <small className="text-danger" >Please enter valid address</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <input type="number" className="form-control" />
                    </div>
                    <small className="text-danger" >Please enter pincode</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <small className="text-danger" >Please enter valid city</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <small className="text-danger" >Please enter valid state</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <input type="text" className="form-control" />
                    </div>
                    <small className="text-danger" >Please enter valid country</small>
                  </div>
                </div>

                <hr />
                <a type="submit" className="btn btn-default btn-lg"><i className="fa fa-floppy-o"></i>Save</a>
                <Link to="/Address" type="button" className="btn btn-default btn-lg"><i className="fa fa-remove"></i>Cancel</Link>
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
export default Address_add;