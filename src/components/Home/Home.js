import React,{Component} from 'react';
import Slider from "../../common/Slider/Slider";
import List from "../../common/List/List";
import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";

import {asyncAction} from '../../store/asyncActions'

class Home extends Component{
  constructor(props){
    super();
    let url=`/data/home.json`;
    props.update(url);
  }

  render(){
    return (
      <>
        <header>
          <a href="location.html" className="location">上海市</a>
          <h1 className="logoIcon" style={{fontSize:".85rem"}}>&#35;</h1>
          <a href="search.html" className="rt_searchIcon">&#37;</a>
        </header>
        <div style={{height:"1rem"}}></div>
        <Slider/>
        <ul className="categoryLiIcon">
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_01.png" alt=""/>
            <em>蔬菜水果</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_06.png" alt=""/>
            <em>禽蛋肉类</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_10.png" alt=""/>
            <em>水产火锅</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_14.png" alt=""/>
            <em>熟食豆制</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_03.png" alt=""/>
            <em>米面粮油</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_07.png" alt=""/>
            <em>调料干货</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_11.png" alt=""/>
            <em>餐厨用品</em>
            </a>
          </li>
          <li>
            <a href="category.html">
            <img src="./img/menu_bg_15.png" alt=""/>
            <em>常购品</em>
            </a>
          </li>
        </ul>
        <List list={this.props.home} dataName="home" />
        <div className="hoverCart">
          <a href="javascript:;">0</a>
        </div>
      </>
    )
  }
}

let initMapStateToProps = state => ({
  home:state.home,
});

let initMapDispatchToProps = dispatch =>({
  update:(url)=>dispatch(asyncAction({
    url:url,
    type:types.VIEW_UPDATE_HOME
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home);