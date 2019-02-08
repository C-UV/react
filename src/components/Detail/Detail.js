import React,{Component} from 'react';


import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";
import {asyncAction} from '../../store/asyncActions'
import {Link} from 'react-router-dom'

class Detail extends Component{
  constructor(props){
    super();
    let id = props.match.params.id;
    var url=`/data/home.json`;
    props.update(url, id)
  }
  render(){
    let {detail,push} = this.props;
    return (
      <>
        <header>
          <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
          <h1>产品详情</h1>
          <a href="cart.html" className="topCart"><em>0</em></a>
        </header>
        <div style={{height:"1rem"}}></div>
        <div className="pro_bigImg">
          <img src={detail.src}/>
        </div>
        <section className="pro_baseInfor">
          <h2>{detail.msg}</h2>
          <p>
            <strong>{detail.oprice}</strong>
            <del>{detail.price}</del>
          </p>
        </section>
        <dl className="pro_attr">
          <dt>产品属性信息</dt>
          <dd>
            <ul>
            <li>
              <span>上市时间</span>
              <em>2015年09月</em>
            </li>
            <li>
              <span>产品规格</span>
              <em>1斤装</em>
            </li>
            <li>
              <span>产品重量</span>
              <em>0.5kg</em>
            </li>
            <li>
              <span>包装方式</span>
              <em>散装</em>
            </li>
            <li>
              <span>保质期</span>
              <em>6个月</em>
            </li>
            <li>
              <span>所属品牌</span>
              <em>晨农</em>
            </li>
            </ul>
          </dd>
        </dl>
        <div style={{height:"1rem"}}></div>  
        <aside className="btmNav">
          <Link to='/shopcart' href='javascript:;' onClick={()=>{push(detail.id)}} style={{background:"#64ab5b",color:"white",textShadow:"none"}}>加入购物车</Link>
          <a href='javascript:;' style={{background:"#87a983",color:"white",textShadow:"none"}}>加入常购单</a>
        </aside>
      </>
    )
  }
}

let initMapStateToProps = state => ({
  detail:state.detail,
});

let initMapDispatchToProps = dispatch =>({
  update:(url,id)=>dispatch(asyncAction({
    url:url,
    id:id,
    type:types.VIEW_UPDATE_DETAIL
  })),
  push:(id) => dispatch({type:types.BUY,payload:id}),
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail);
