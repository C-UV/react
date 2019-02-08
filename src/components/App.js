import React, {Component} from 'react';

import Home from "./Home/Home";
import Category from "./Category/Category";
import Shopcart from "./Shopcart/Shopcart";
import User from "./User/User";
import Detail from "./Detail/Detail";
import Login from "./Login/Login";
import Reg from "./Reg/Reg";
import Footer from "../common/Footer/Footer";
import Error from "../common/Error/Error";

import {Switch,Route,Redirect} from 'react-router-dom'
import Loading from "../common/Loading/Loading"

import {connect} from 'react-redux'

import * as types from '../store/types'
import Auth from "../guard/Auth";

class App extends React.Component {

  componentWillReceiveProps(nextProps){//路由监听
    let {view_foot,car}=nextProps;
    let path = nextProps.location.pathname;
    if (/home|category|user|login|reg|error/.test(path)){view_foot(true);}
    if (/shopcart|detail/.test(path)){view_foot(false);}
      localStorage.setItem("goods",JSON.stringify(car))
  }

  render() {
    let {bLoading,bFoot,view_foot,view_loading}=this.props;
    return (
      <>
        {bLoading && <Loading/>}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/shopcart" component={Shopcart}/>
          <Auth path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
          <Redirect exact from="/" to="/home"/>
          <Route component={Error}/>
        </Switch>
        {bFoot && <Footer/>}
      </>
    )
  }
}

let initMapStateToProps = state => ({
  bLoading:state.bLoading,
  bFoot:state.bFoot,
  car:state.car
});

let initMapDispatchToProps = dispatch =>({
  view_foot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App);