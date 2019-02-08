import React from 'react';
import {Link} from 'react-router-dom'
import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";

const List = ({list,dataName}) => (
  <div className="newsList">
    <dl className="tab_proList">
      <dt>
        <a>热销</a>
        <a>新品</a>
        <a>打折</a>
      </dt>
      <dd>
        <ul>
          {
            list.map((item,index)=>(
              <li key={index}>
                {/*<Link to={{pathname:'/detail/1',search:'?dataName=home'}}>*/}
                <Link to={{
                  pathname:'/detail/'+item.id,
                }}>
                  <span className="goodsPic">
                    <img src={item.src}/>
                  </span>
                </Link>
                  <div className="goodsInfor">
                    <h2>
                      <span>{item.msg}</span>
                    </h2>
                    <p>
                      <del>{item.oprice}</del>
                    </p>
                    <p>
                      <strong className="price">{item.price}</strong>
                    </p>
                    {/* <span className="addToCart" onClick={()=>{push(item.id)}}>&#126;</span> */}
                  </div>
              </li>
            ))
          }
        </ul>
      </dd>
    </dl>
  </div>
);

let initMapStateToProps = state => ({

});

let initMapDispatchToProps = dispatch =>({
  push:(id) => dispatch({type:types.BUY,payload:id}),
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(List);