/**
/**
 * @text
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Text extends Component{
	constructor(props) {
		super(props);
		
	}

    _handleSubmit(){
        
    }

    render(){
        return (
            <div>
                Text
                <div>
                	<button onClick={this._handleSubmit.bind(this)}>Go to About</button>
                </div>
            </div>
            )
    }
}