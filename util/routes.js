import React from 'react'
import { IndexRoute, Route } from 'react-router';
import Page from '../src/app';
import Login from '../src/login/index';
import About from '../src/about';
import IndexHome from '../src/mainApp/indexHome';

const PageOnEnter = (nextState, replace, next) => {
	console.log("PageONEnter");
	// debugger;
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
	next();
	return;
}

const OrLogin = () =>{
	console.log('COOKIE:', document.cookie , !!document.cookie);
	return !!document.cookie;
}

export default (
	<Route>
		<Route path="/login" component={Login}>

		</Route>
		<Route path="/" component={Page} onEnter={PageOnEnter} onChange={PageOnChange} >
			<IndexRoute component={IndexHome} />
			<Route path="about" component={About} />
		</Route>
	</Route>
)