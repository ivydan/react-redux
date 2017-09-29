/**
 * @login
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.less';

export default class App extends Component{
	constructor(props){
		super(props);

		_.bindAll(this, "_handleChangeLogin",
						"_handleSubmit",
						);

		this.state={
			name: ""
		}

	}

	_handleChangeLogin(e){
		this.setState({
			name: e.target.value
		})
	}

	_handleSubmit(){
		console.log(this.state.name)
	}

    render(){
    	let { name } = this.state;
    	console.log(this.props)
        return <div className="sd-login">
            <div className="login-content">
            	登录：
            	<input 
            		type="text" 
            		onChange={this._handleChangeLogin}
            		value={name}/>

            	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            	<input 
            		type="button" 
            		onClick={this._handleSubmit}
            		value="提交"/>
            </div>
        </div> 
    }
}