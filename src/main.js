import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import Courses from './Courses';
import App from './App'
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();
render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app')
	);