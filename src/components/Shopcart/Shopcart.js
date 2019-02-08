import React,{Component} from 'react';
import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom'


class Shopcart extends Component{
  constructor(){
    super();
  }
  componentDidMount() {
   
    let { getCookie } = this.props;
    var data = JSON.parse( localStorage.getItem("goods"))
    getCookie(data)
  }
  render(){
    let { car, changeItem, removeItem, clearBuycar} = this.props;
    let num = 0
    car.map((item, index) => { 
        num += parseFloat(item.number) * parseFloat(item.price)
      })
    return (
      <>
        <header>
        <Link to='/home' href="javascript:;" className="iconfont backIcon">主页</Link>
        <h1>购物车</h1>
        </header>
        <div style={{height:"1rem"}}></div>
      {car.map((item,index)=>{
        return(
        <div key={index}>
        <dl className="cart">
        <dd>
          <input type="checkbox"/>
          <a href="javascript:;" className="goodsPic"><img src={item.src}/></a>
          <div className="goodsInfor">
            <h2>
              <a href="javascript:;">{item.msg}</a>
              <span>{item.number}</span>
            </h2>
            <div className="priceArea">
              <strong>{item.price}</strong>
              <del>{item.oprice}</del>
            </div>
            <div className="numberWidget">
              <input type="button" value="-" className="minus" onClick={changeItem.bind(null,item.product_id,-1)}/>
              <input type="text" value={item.number} disabled  className="number"/>
              <input type="button" value="+"  className="plus"onClick={changeItem.bind(null,item.product_id,1)}/>
            </div>
          </div>
          <a className="delBtn" onClick={removeItem.bind(null,item.product_id)}>删除</a>
        </dd>
        </dl>
      </div>
      )
    })}
      <div style={{height:"1rem"}}></div>
      <aside className="btmNav">
        <a>合计:{num}</a>
        <a href="javascript:;" onClick={clearBuycar} style={{background:"#64ab5b",color:"white",textShadow:"none"}}>清空购物车</a>
      </aside>
    </>
    )
  }
}

let initMapStateToProps = state => ({
  car: state.car,
});

let initMapDispatchToProps = dispatch =>({
  changeItem: (id,num) => dispatch({type:types.change_car,payload:{id,num}}),
  removeItem: (id) => dispatch({ type: types.remove_car, payload: id }),
  clearBuycar: () => dispatch({ type: types.clear_car }),
  getCookie: (data) => dispatch({ type: types.get_cookie_car, payload: data }),
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Shopcart);