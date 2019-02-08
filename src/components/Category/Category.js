import React,{Component} from 'react';

export default class Category extends Component{
  render(){
    return (
      <div className="Category">
        <header>
        <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
        <h1>动态分类名称</h1>
        <a href="search.html" className="rt_searchIcon">&#37;</a>
        </header>
        <div style={{height:"1rem"}}></div>
        <aside className="class_tree">
        <ul>
          <li className="current_style">
          <a>
            <img src="./img/menu_bg_01.png"/>
            <strong>蔬菜水果</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_06.png"/>
            <strong>禽蛋肉类</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_10.png"/>
            <strong>水产火锅</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_14.png"/>
            <strong>熟食豆品</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_03.png"/>
            <strong>米面粮油</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_07.png"/>
            <strong>调料干货</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_11.png"/>
            <strong>餐厨用品</strong>
          </a>
          </li>
          <li>
          <a>
            <img src="./img/menu_bg_15.png"/>
            <strong>常购品</strong>
          </a>
          </li>
        </ul>
        </aside>
        <ul className="category_cont">
        <li>
          <a href="product_list.html">全部</a>
        </li>
        <li>
          <a href="product_list.html">肉质根类菜</a>
        </li>
        <li>
          <a href="product_list.html">块根类菜</a>
        </li>
        <li>
          <a href="product_list.html">地下茎类</a>
        </li>
        <li>
          <a href="product_list.html">普通叶菜类</a>
        </li>
        <li>
          <a href="product_list.html">结球叶莱类</a>
        </li>
        <li>
          <a href="product_list.html">辛番叶菜类</a>
        </li>
        <li>
          <a href="product_list.html">鳞茎菜类</a>
        </li>
        <li>
          <a href="product_list.html">茄果类</a>
        </li>
        </ul>
      </div>
    )
  }
}