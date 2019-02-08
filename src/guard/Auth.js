import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const Auth = ({component:Component,user, ...rest}) => {
  return(
  <Route {...rest} render={(contents)=>{
    return (
      localStorage.getItem('user') ?
        <Component {...contents} /> :
        <Redirect to="/login" />
    )}
  }/>)
};
export default Auth;