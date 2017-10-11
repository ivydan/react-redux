import React from 'react';
import { Link } from 'react-router';

import './app.less';

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
            <div className="sdWebPage" >
                <header>
                    <span>Header内容区</span>
                </header>
                <div className="sub">
                    <ul>
                        
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="middle">
                        {this.props.children}
                    </div>
                </div>
                {/*<footer>
                    <h4>Footer内容区</h4>
                </footer>*/}
                
            </div>
        );
    }
}