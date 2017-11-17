import React, { Component } from 'react';

import { NavBar,Icon,WhiteSpace,Pagination,WingBlank,SegmentedControl,Tabs,ImagePicker,SearchBar } from "antd-mobile";

import p from './page.css';

class Page2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      values:["栏目1","栏目2"],
      val:'栏目1',
      valIndex:0,
      tabs:[{title:'Home'}],
      data:[{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
      }],
    }
  }
  componentDidMount(){
    this.setState({
      tabs:[
        {title:"Home"},
        {title:"News"},
        {title:"About"},
        {title:"User"},
        {title:"Setting"},
      ]
    })
  }
  leftClick(){
    console.log('Click left');
  }
  rightClick(msg){
    console.log(msg,'Click right');
  }
  sChange(e){
    // console.log(e.nativeEvent.selectedSegmentIndex);
    this.setState({
      valIndex:e.nativeEvent.selectedSegmentIndex
    })
  }
  valChange(val){
    // console.log(val);
    this.setState({
      val
    })
  }
  handleChange(files,type,index){
    this.setState({
      data:files
    })
  }
  render() {
    return (
      <div className={p.page}>
        <h1>NavBar & Icon</h1>
        
        <NavBar mode="light" 
        icon={<Icon type="left"/>} 
        onLeftClick={this.leftClick.bind(this)}
        rightContent={<Icon onClick={this.rightClick.bind(this,"im right")} type="search"/>}
         >NavBar</NavBar>
        <WhiteSpace />
        <h2>Search Bar</h2>
        <SearchBar placeholder="搜索关键字" maxLength={8}/>
        <WhiteSpace />
        <h2>分页器</h2>

        <Pagination total={10} current={1} locale={{prevText:"上一页",nextText:"下一页"}}></Pagination>

        <h2>分段器</h2>
        <WhiteSpace />
        <SegmentedControl onChange={this.sChange.bind(this)} onValueChange={this.valChange.bind(this)} values={this.state.values}/>
        <h3>{this.state.values[this.state.valIndex]}--index</h3>
        <h3>{this.state.val}--val</h3>

        <WhiteSpace />

        <h2>tabs</h2>
        <Tabs tabs={this.state.tabs}>
        {
          this.state.tabs.map((item,index)=>{
            return (
              <div key={index} className={p.container}>
                <h3>{item.title}</h3>
              </div>
            )
          })
        }
        </Tabs>

        <WhiteSpace />

        <h2>图片选择器</h2>
        <ImagePicker files={this.state.data} onChange={this.handleChange.bind(this)}></ImagePicker>

        <WhiteSpace />

        

      </div>
    );
  }
}

export default Page2;
