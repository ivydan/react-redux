import React from 'react'
import { IndexRoute, Route } from 'react-router';
import Page from '../src/app';
import Login from '../src/login/index';
import About from '../src/about';

const PageOnEnter = (nextState, replace, next) => {
	let { pathname} = nextState.location;
	if(!OrLogin()){
		let redirectUrl = pathname + nextState.location.search;
		console.log(pathname, redirectUrl);
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
	

	next();
	return;
}

const OrLogin = () =>{
	return !!document.cookie;
}

export default (
	<Route>
		<Route path="/login" component={Login}>

		</Route>
		<Route path="/" component={Page} onEnter={PageOnEnter} onChange={PageOnChange} >
			<Route path="about" component={About} />
		</Route>
	</Route>
)