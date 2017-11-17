import React, { Component } from "react";

import { HashRouter, Route, Switch,Redirect  } from "react-router-dom";


import 'antd-mobile/dist/antd-mobile.css'; 

import "./App.css";

import Header from "./component/header/header";
import Nav from "./component/nav/nav";
import Page1 from "./component/page/page1";
import Page2 from "./component/page/page2";
import Page3 from "./component/page/page3";
import Page4 from "./component/page/page4";
import Page5 from "./component/page/page5";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Header />
            
            <Nav />
            <Switch>
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page3" component={Page3} />
              <Route path="/page4" component={Page4} />
              <Route path="/page5" component={Page5} />
              <Redirect push to="/page1"></Redirect>
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
