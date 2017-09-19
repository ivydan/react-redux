/**
 * @Page
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Page from './view/page';

// const store = createStore(function(){
//     return {
//         name: "maggie"
//     }
// });

// const state = store.getState();

// const ADD_TODO = "添加 TODO";

// function addTodo(text){
//     return {
//         type: ADD_TODO,
//         text
//     }
// }

// const action = addTodo('Learn Redux');

// store.dispatch(action);

//reducer
const defaultState = 0;

const reducer = function(state = defaultState, action){
    switch(action.type){
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
}

// const state = reducer(1, {
//     type: "ADD",
//     payload: 2
// });

const store = createStore(reducer);

console.log(store)

ReactDOM.render(<Page />, document.getElementById('container'));