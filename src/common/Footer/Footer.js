import React from 'react';
import './Footer.css'
import {NavLink} from 'react-router-dom'

const Footer = (props) => (
  <>
    <div style={{height:"1.2rem"}}></div>
    <nav>
      <NavLink href="javascript:;" to="/home" className="homeIcon" activeClassName="home_active">首页</NavLink>
      <NavLink href="javascript:;" to="/category" className="categoryIcon" activeClassName="category_active">分类</NavLink>
      <NavLink href="javascript:;" to="/shopcart" className="cartIcon" activeClassName="cart_active">购物车</NavLink>
      <NavLink href="javascript:;" to="/user" className="userIcon" activeClassName="user_active">我的</NavLink>
    </nav>
  </>

);

export default Footer;