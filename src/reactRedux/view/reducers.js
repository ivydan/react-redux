import React from 'react';

export default class Page extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content: "hello world!"
        }
    }

    componentDidMount(){
    }
    
    render(){
        console.log('Render App！')
        return (
            <div>{this.state.content}</div>
        );
    }
}