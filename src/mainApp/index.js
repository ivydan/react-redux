/**
 * @MainApp
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import routes from '../../util/routes';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({ 
	basename: "" 
});


ReactDOM.render(
	(
		<Router history={history} routes={routes}>
		</Router>
), document.getElementById("container"))