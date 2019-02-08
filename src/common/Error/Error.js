import React from 'react';

const Error = (props) => (
  <div className="error">
    <header>
      <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
      <h1>404页面</h1>
    </header>
    <div style={{height:"1rem"}}></div>
      <mark className="notFound">对不起页面未找到！</mark>
    <div style={{height:"1.2rem"}}></div>
  </div>
);

export default Error;