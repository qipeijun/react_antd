import React, { Component } from 'react';

import { createStore } from "redux";

import p from './page.css';



/**
 * 这是一个reducer，形式为(state,action) => state的纯函数。
 * 描述了action 如何把state 转变成下一个 state
 * 
 * state的形式取决于你，可以是基本的类型，数组，对象，
 * 甚至是Immutale.js 生成的数据结构。唯一的要点是
 * 当state变化时需要返回全新的对象，而不是修改传入的参数。
 * 
 * 下面例子使用 `switch`语句和字符串 来做判断，但你可以写帮助类(helper)
 * 根据不同的约定(如方法映射)来判断，只要适用你的项目即可
 * 
 */

 function counter(state = 0, action) {
   switch (action.type) {
     case "INCREMENT":
       return state + 1;
       break;
     case "DECREMENT":
       return state - 1;
       break;
     default:
       return state;
       break;
   }
 }

 //创建Redux state来存放应用的状态。
 //API是{subscribe，dispatch，getState}。
 let store = createStore(counter);

 //可以手动订阅更新，也可以事件绑定到视图。
 store.subscribe(()=>{
   console.log(store.getState());
 })

 //改变内部 state 唯一方法是 dispatch一个action。
 //action 可以被序列化，用日记记录和存储下来，后期还可以以回放的形式执行
 store.dispatch({type:"INCREMENT"});
 // 1
 store.dispatch({type:"INCREMENT"});
 //2
 store.dispatch({type:"DECREMENT"});
 //1

class Page4 extends Component {
  render() {
    return (
      <div className={p.page}>
        <h1>page4-Redux</h1>
        
      </div>
    );
  }
}

export default Page4;
