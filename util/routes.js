import React from 'react'
import { IndexRoute, Route, Redirect } from 'react-router';
import Page from 'components/page/app';
import Login from '../src/login/index';
import About from '../src/about';
import Test from '../src/test';
import Catalog from '../src/catalog';
import Error from '../src/error';

import IndexHome from '../src/defaultIndex';

const PageOnEnter = (nextState, replace, next) => {
	console.log("PageONEnter");
	
	let { pathname} = nextState.location;
	//判断是否需要登陆。
	if(!OrLogin()){
		let redirectUrl = pathname + nextState.location.search;
		replace({
			pathname: '/login',
			search: '?redirectUrl=' + encodeURIComponent(redirectUrl),
			state: {
				redirectUrl: redirectUrl
			}
		});
		next();
		return;
	}

	next();
	return;
}

const PageOnChange = (prevState, nextState, replace, next) => {
	console.log("PageChange")

	let { pathname} = nextState.location;
	//判断是否需要登陆。
	if(!OrLogin()){
		let redirectUrl = pathname + nextState.location.search;
		replace({
			pathname: '/login',
			search: '?redirectUrl=' + encodeURIComponent(redirectUrl),
			state: {
				redirectUrl: redirectUrl
			}
		});
		next();
		return;
	}
	
	next();
	return;
}

const OrLogin = () =>{
	return !!document.cookie && document.cookie !== 'null';
}

export default (
	<Route>
		<Route path="/login" component={Login} />
		<Route path="/" component={Page} onEnter={PageOnEnter} onChange={PageOnChange} >
			<IndexRoute component={IndexHome} />
			<Route path="about" component={About} />
			<Route path="testBcc" component={Test} />
			<Route path="catalog" component={Catalog} />
			<Route path="error" component={Error} />
			<Redirect from="*" to="error" />
		</Route>
	</Route>
)