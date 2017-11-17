import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Flex, WhiteSpace,WingBlank } from "antd-mobile";

import p from "./page.css";

class Page1 extends Component {
  render() {
    return (
      <div className={p.page + " clearfix"}>
        <h1>page1</h1>
        <Link to="/page4" className={p.btnto}>
          &gt;to page4
        </Link>
        <br />
        <hr />
        <div className={p.layout}>
          <h2 className="clearfix">flex layout</h2>
          <WhiteSpace size="lg"/>
          <Flex>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
          </Flex>

          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
            <Flex.Item>
              <Text text={"Item"} />
            </Flex.Item>
          </Flex>
          <WhiteSpace />
          <h2>wrap</h2>
          <Flex wrap="wrap">
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
            <Text className={p.inline} text={"wrap"} />
          </Flex>
          <WhiteSpace />
          <h2>justify center</h2>
          <Flex justify="center">
          <Text className={p.inline} text={"justift"} />
          <Text className={p.inline} text={"justift"} />
          <Text className={p.inline} text={"justift"} />
          </Flex>
          <WhiteSpace />

          <h2>两翼留白</h2>
          <WingBlank size="lg">
            <Text text={'两翼留白-lg'}></Text>
          </WingBlank>
          <WhiteSpace />
          <WingBlank size="md">
            <Text text={'两翼留白-md'}></Text>
          </WingBlank>
          <WhiteSpace />
          <WingBlank size="sm">
            <Text text={'两翼留白-sm'}></Text>
          </WingBlank>
          <WhiteSpace />
          <h2>上下留白</h2>
          <WhiteSpace />
          <Text text={'上下留白-lg'}/>
          <WhiteSpace size="lg"/>
          <Text text={'上下留白-md'}/>
          <WhiteSpace size="md"/>
          <Text text={'上下留白-sm'}/>
          <WhiteSpace size="sm"/>

        </div>
      </div>
    );
  }
}

function Text(props) {
  return <p className={p.text+' '+props.className}>{props.text}</p>;
}



export default Page1;
