import * as types from './types'
export let asyncAction=({url,type,id})=>(dispatch,getState)=>{
  dispatch({type:types.VIEW_LOADING,payload:true});
  return fetch(
    url
  ).then(
    res=>res.json()
  ).then(
    data=>{
      setTimeout(()=>{
        dispatch({type:types.VIEW_LOADING,payload:false});
        dispatch({type:type,payload:{data:data,id:id}});
      },500)
    }
  );
};

