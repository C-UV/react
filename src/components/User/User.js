import React,{Component} from 'react';
import headimg from '../../assets/images/head.jpg'

export default class User extends Component{
  constructor(props){
    super();
    this.state={
      userdata:window.localStorage.getItem('user')
    }
  }
  render(){
    return (
      <>
        <header>
          <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
          <h1>个人中心</h1>
          <a href="javascript:;" className="setIcon" style={{fontSize:'18px'}} onClick={this.quit.bind(this)}>注销</a>
        </header>
        <div style={{height:"1rem"}}></div>
        <div className="userInfor">
          <a className="userIcon"><img src={headimg}/></a>
          <h2>{this.state.userdata}</h2>
        </div>
        <ul className="userList">
          <li><a href="order_list.html" className="orderListIcon">我的订单</a></li>
          <li><a href="favorite.html" className="collectionIcon">常购清单</a></li>
          <li><a href="profile.html" className="profileIcon">个人资料</a></li>
        </ul>        
      </>
    )
  }
  quit(){
    localStorage.removeItem('user');
		// location.href="/login";
  }
}