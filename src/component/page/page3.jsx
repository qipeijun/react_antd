import React, { Component } from 'react';

import { ActivityIndicator,Button,Icon,Toast,WhiteSpace } from "antd-mobile";

import p from './page.css';

class Page3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:false,
    }
  }
  showLoading(){
    this.setState({isLoading:true});
    this.hideLoading();
  }
  hideLoading(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },3000)
  }
  showToast(){
    Toast.loading("loading",2,()=>{
      console.log('我关闭了');
    })
  }
  render() {
    return (
      <div className={p.page}>
        <h1>loading</h1>
        <Button type="primary" icon={<Icon type="check-circle-o"/>} onClick={this.showLoading.bind(this)}>加载数据</Button>
        <ActivityIndicator animating={this.state.isLoading} toast text="Loading"/>
        <WhiteSpace />
        <Button onClick={this.showToast.bind(this)}>showToast</Button>
      </div>
    );
  }
}

export default Page3;
