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

import Ajax from './utils/ajax';
import { cube } from './utils/test';
import './index.less';

class App extends Component{
	constructor(props){
		super(props);

		_.bindAll(this, "_handleChangeLogin",
						"_handleSubmit",
						);

		this.state={
			num: ""
		}

	}

	_handleChangeLogin(e){
		this.setState({
			num: e.target.value
		})
	}

	_handleSubmit(){
		Ajax.login().then((data) => {
			console.log('data', data);
			if(data.success){
				document.cookie = 'num='+this.state.num;
				let { redirectUrl } = this.props.location.query;
				this.props.router.replace(redirectUrl);
			}
		}).catch((err) => {
			console.log('Error:', err)
		})
		
	}

    render(){
    	let { num } = this.state;
        return <div className="sd-login">
			<div className="login-title">
				欢迎进入SD系统1
			</div>
            <div className="login-content">
            	请输入登录密码：
            	<input 
            		type="text" 
            		onChange={this._handleChangeLogin}
            		value={num}/>

            	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            	<input 
            		type="button" 
            		onClick={this._handleSubmit}
            		value="确认"/>
            </div>
        </div> 
    }
}

export default Branch(App);