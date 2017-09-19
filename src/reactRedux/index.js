/**
 * @reactRedux
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './view/reducers';
import  App from './view/app';

// const getVisibleTodos = (todos, filter) => {
//     switch(filter){
//         case 'SHOW_ALL': return todos;
//         case 'SHOW_COMPLIETED': return todos.filter(t => t.completed);
//         case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
//         default:
//             throw new Error("Unknown filter: ", filter) 
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         todos: getVisibleTodos(state.todos, state.visibilityFilter);
//     }
// }

//使用ownProps作为参数后， 如果容器组件的参数发生变化，也会引发UI组件的重新渲染。
// const mapStateToProps = (state, ownProps) => {
//     return {
//         active: ownProps.filter === state.visibilityFilter
//     }
// }

//mapDispatchToProps是connect函数的第二个参数，用来建立UI组件的参数到Store。dispahtch方法的映射。

// const mapDispatchToProps = (
//     dispatch,
//     ownProps
// ) => {
//     return {
//         onClick: () => {
//             dispatch({
//                 type: 'SET_VISIBILITY_FILTER',
//                 filter: ownProps.filter
//             });
//         }
//     };
// }



// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}


const store = createStore(counter);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('container'));