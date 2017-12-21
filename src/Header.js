import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.dropdown=this.dropdown.bind(this);
    this.state = {
            active: false,
        };
  }
  dropdown(){
    const currentState = this.state.active;
        this.setState({ active: !currentState });
  };
   render() {
      return (
         <div>
              <nav className="navbar navbar-default">
    			<div className="container">
      				<div className="navbar-header">
        			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
        				<span className="sr-only">Toggle navigation</span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
      				</button>
        			<Link to="/"className="navbar-brand">
        			<i className="fa fa-shopping-bag fa-lg" aria-hidden="true"> <strong >NeoSTORE</strong> </i>
      				</Link>
      			</div>
      			<div className="collapse navbar-collapse" id="navbar">
        			<ul className="nav navbar-nav">
          				<li><Link to="/">HOME</Link></li>
        			</ul>

        <form autoComplete="off" className="pull-left">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="input-group search-bar">
                  <input name="search" className="form-control" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>

        <ul className="nav navbar-nav navbar-right">
          <li className={this.state.active ? 'open': null}> 
            <a href="#" className="dropdown-toggle" onClick={this.dropdown} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-user fa-lg" area-hidden="true"></i>
            <span className="caret"></span>
          </a>
            <ul className="dropdown-menu">
              <li><Link to="/Profile"><i className="fa fa-user fa-fw" aria-hidden="true"></i>Profile</Link></li>
              <li><Link to="/Orders"><i className="fa fa-list-alt fa-fw" aria-hidden="true"></i>Orders</Link></li>
              <li><Link to="/Address"><i className="fa fa-address-card-o fa-fw" aria-hidden="true"></i>Addresses</Link></li>
              <li><Link to="/Logout"><i className="fa fa-sign-out fa-fw" aria-hidden="true"></i>&nbsp; Logout</Link></li>
              <li><Link to="/Login"><i className="fa fa-sign-in fa-fw" aria-hidden="true"></i>Login</Link></li>
              <li><Link to="/Register"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>Register</Link></li>
            </ul>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="text-primary" href="./views/checkout/cart.html">
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>Cart <span className="badge">3</span>
          </a>
          </li>
        </ul>
      </div>
    </div>
			</nav>
         </div>
      );
   }
}
export default Header;