import React from 'react';
import { Link } from 'react-router';

export default class Page extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content: "hello world！！"
        }
    }

    componentDidMount(){
    }
    
    render(){
        console.log('Render App！', this.props);
        return (
            <div>
                <h1>Main</h1>
                <ul>
                  <li><Link to="/about">About</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}