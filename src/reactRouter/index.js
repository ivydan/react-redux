/**
 * @reactRouter
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory, browserHistory, IndexRoute, Link } from 'react-router';

class App extends Component{

    render(){
        console.log("PROPS:",this.props);
        return <div>{this.props.children}</div>
    }
}


class Repos extends Component{
    
    render(){
        console.log(this.props.params.name)
        return <div>
            Repos
            <h1>{this.props.params.name}</h1>
            </div>
    }
}

class About extends Component{
    
    render(){
        return <div>
            About
            <Link to="/repos/Job" activeStyle={{color: 'red'}} > To </Link>
        </div>
    }
}

class Home extends Component{
    render(){
        return <div>Home
            <h1>
            <Link to="/about" activeStyle={{color: 'red'}} > To About </Link>
            </h1>
        </div>
    }
}

// ReactDOM.render( 
   
//     <Router history={hashHistory}>
//         <Route path="/" component={App}/>
//         <Route path="/repos" component={Repos}/>
//         <Route path="/about" component={About}/>
//     </Router>
   
//     , document.getElementById('container'));

browserHistory.push('/about')

ReactDOM.render( 
    
     <Router history={hashHistory}>
         <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/repos/:name" component={Repos}/>
            <Route path="/about" component={About}/>
         </Route>
         
     </Router>
    
     , document.getElementById('container'));