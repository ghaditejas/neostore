import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Banner extends Component{
  render(){
    return (
        <div className="row">
      <div className="carousel-holder">
        <div  id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators" >
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="i"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="slide-image" src="http://via.placeholder.com/970x400" alt="" />
              <div className="carousel-caption">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="item">
              <img className="slide-image" src="http://via.placeholder.com/970x400" alt="" />
              <div className="carousel-caption">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="item">
              <img className="slide-image" src="http://via.placeholder.com/970x400" alt="" />
              <div className="carousel-caption">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    </div>
      );
  }
}
export default Banner;