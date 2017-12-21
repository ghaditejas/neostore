import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Side_menu from './Side_menu';

class Orders extends Component{
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

        <Side_menu />

        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading text-muted">
              <span className="text-warning"><strong>TRANSIT</strong></span>
              <span>Order No: 5sd4a442341ds</span>
              <div>
                <small>Placed on 15/09/2017 / </small>
                <small className="text-success"><strong>2000$</strong></small>
              </div>
              <hr />
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="thumbnail">
                    <img src="http://via.placeholder.com/150x100" alt="product_image" className="img-rounded" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail">
                    <img src="http://via.placeholder.com/150x100" alt="product_image" className="img-rounded" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail">
                    <img src="http://via.placeholder.com/150x100" alt="product_image" className="img-rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <button type="button" className="btn btn-success">Download invoice as PDF</button>
            </div>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading text-muted">
                <span className="text-warning"><strong>TRANSIT</strong></span>
                <span>Order No: 5sd4a442341ds</span>
                <div>
                  <small>Placed on 15/09/2017 / </small>
                  <small className="text-success"><strong>2000$</strong></small>
                </div>
                <hr />
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <img src="http://via.placeholder.com/150x100" alt="product_image" className="img-rounded" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <img src="http://via.placeholder.com/150x100" alt="product_image" className="img-rounded" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <img src="http://via.placeholder.com/150x100" alt="product_image" className="img-rounded" /> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <button type="button" className="btn btn-success">Download invoice as PDF</button>
              </div>
            </div>

          <hr />
        </div>
      </div>
    </div>
  </div>

      );
  }
}
export default Orders;