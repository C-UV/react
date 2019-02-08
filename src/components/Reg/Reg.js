import React,{Component} from 'react';
import {Link} from "react-router-dom";

export default class Reg extends Component{
  render(){
    return (
      <>
        <header>
          <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
          <h1>注册</h1>
        </header>
        <div style={{height:"1rem"}}></div>
        <ul className="formarea">
          <li>
            <label className="lit">账号：</label>
            <input type="tel" placeholder="手机号码" className="textbox" ref='tel'/>
          </li>
          <li>
            <label className="lit">密码：</label>
            <input type="password" placeholder="设置密码" className="textbox" ref='pass'/>
          </li>
          <li>
            <label className="lit">确认密码：</label>
            <input type="password" placeholder="确认密码" className="textbox"/>
          </li>
          <li>
            <label className="lit">所在城市：</label>
            <select>
            <optgroup label="山东省">
              <option>德州市</option>
            </optgroup>
            </select>
          </li>
          <li>
            <label className="lit">餐馆名称：</label>
            <input type="text" placeholder="餐馆名称" className="textbox"/>
          </li>
          <li>
            <label className="lit">收货人：</label>
            <input type="text" placeholder="收件人真实姓名" className="textbox"/>
          </li>
          <li>
            <label className="lit">联系电话：</label>
            <input type="tel" placeholder="联系电话" className="textbox"/>
          </li>
          <li>
            <label className="lit">收货地址：</label>
            <input type="text" placeholder="区-街道-小区-门牌号" className="textbox"/>
          </li>
          <li className="liLink">
            <a href="article.html" className="fl">《用户协议》</a>
            <a href="login.html" className="fr">已有账号，登陆</a>
          </li>
          <li>
            <input type="button" value="立即注册" onClick={this.reg.bind(this)}/>
          </li>
        </ul>
      </>
    )
  }
  reg(){
    var user = this.refs.tel.value
    var pass = this.refs.pass.value
    fetch(
      'http://www.liyangyf.com/ctrl/register.php?tel='+user+'&pass='+pass
    ).then(
      res=> res.json()
    ).then(
      data=>{
        console.log(data)
        switch(data){
          case 0:
            alert("用户名已存在");
            break;
          case 1:
            // location.href = "/login"
            break;
          case 2:
            alert("请输入正确的用户名与密码");
            break;
            
        }
      }
    )
  }
}