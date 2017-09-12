# react-redux

* Redux 是个可预测的状态容器（predictable state container）

* redux 三大原则

    > 单一数据源： 整个应用状态都保存在一个对象中，随时可以提取整个应用的状态进行持久化（通过工具函数combineReducers化解数据源对象过于庞大问题）。

    > 状态是只读的： 

    > 状态修改均由纯函数完成： 

* Redux 核心API

    **在Redux 里负责响应action并修改数据的角色就是reducer。**

    通过createStore方法创建的store是一个对象，包含四个方法：

    > getState() 获取store中当前的状态

    > dispatch(action) 分发一个action，并返回这个action，这是唯一能改变store中数据的方法。

    > subscribe(listener) 注册一个监听者， 他在store发生变化时被调用。

    > replaceReducer(nextReducer) 更新当前store里的reducer， 一般只会在开发模式中调用该方法。

## Redux与React绑定

* react-redux 提供了一个组建和一个api帮助Redux和React进行绑定：

* <Provider /> :接受一个store作为props 它是整个Redux应用的顶层组建。
* connect() :提供了在整个React应用的任意组建中获取store中数据的功能。

## 异步action

* 异步action的需求可以通过Redux原生的middleware设计来实现

