/**
 * @login
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Branch from 'components/branch';
import _ from 'lodash';
import auth from 'auth';
import Utils from 'utils';
import './index.less';

class App extends Component{
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
		let { redirectUrl } = this.props.location.query;
		this.props.router.replace(redirectUrl);
	}

    render(){
    	let { name } = this.state;
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

export default Branch(App);