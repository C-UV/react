import React,{Component} from 'react';

import {NavLink} from 'react-router-dom'

export default class Login extends Component{
  constructor(){
    super()
    this.state={
      user:'',
      pass:''
    }
  }
  render(){
    return (
      <>
        <section className="formLogo">
          <h2>&#35;</h2>
        </section>
        <ul className="formarea">
          <li>
            <label className="lit">账号：</label>
            <input type="text" placeholder="手机号码" className="textbox" ref='user'/>
          </li>
          <li>
            <label className="lit">密码：</label>
            <input type="password" placeholder="登陆密码" className="textbox" ref='pass'/>
          </li>
          <li className="liLink lg_liLink">
            <span><label><input type="checkbox"/>记住密码</label></span>
            <span><NavLink to='/reg' href="javascript:;">新用户注册</NavLink></span>
            <span><a href="find_pwd.html">忘记密码?</a></span>
          </li>
          <li>
            <input type="button" value="立即登陆" onClick={this.login.bind(this)}/>
          </li>
        </ul>
      </>
    )
  }
  login(){
    var user = this.refs.user.value
    var pass = this.refs.pass.value
    fetch(
      'http://www.liyangyf.com/ctrl/login.php?user='+user+'&pass='+pass
    ).then(
      res=> res.json()
    ).then(
      data=>{
        switch(data){
          case 0:
            alert("您的用户名或密码有误");
            break;
          case 1:
            alert("用户不存在")
            break;
          default:
            localStorage.setItem('user',this.refs.user.value)
						// location.href = "/user"
        }
      }
    )
  }
}