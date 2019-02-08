import * as types from './types'
let reducer=(state,action)=>{
  let {type,payload}=action;
  switch (type) {
    case types.VIEW_LOADING:
      return Object.assign({},state,{
        bLoading:payload
      });
    case types.VIEW_FOOT:
      return Object.assign({},state,{
        bFoot:payload
      });
    case types.VIEW_UPDATE_HOME:
      return Object.assign({},state,{
        home:payload.data
      });
    case types.VIEW_UPDATE_DETAIL:
      return Object.assign({},state,{
        detail:payload.data[payload.id-1]
      });
    case types.VIEW_UPDATE_SHOPCART:
      return Object.assign({},state,{
        shopcart:payload.data[payload.id-1]
      });
    case types.BUY: {
      var flag = false
      state.car.forEach((item, index) => {
          if (item.id == payload) {
              item.number++
              flag=true
          }
      })
      if (!flag) {
        if (state.detail.id == payload) {
            state.car.push(state.detail)
        }
      }
      return Object.assign({},state,{car:[...state.car]})
    }
    case types.change_car: {
      state.car.forEach((item, index) => {
          if (item.id == payload.id) {
              item.number += payload.num;
              if(item.number == 0 ){
                  item.number = 1
              }
          }
      })
      return Object.assign({},state,{car:[...state.car]})
    }
    case types.remove_car: {
        state.car.forEach((item, index) => {
            if (item.id == payload) {
                state.car.splice(index,1)
            }
        })
        return Object.assign({},state,{car:[...state.car]})
    }
    case types.clear_car: return Object.assign({}, state, { car: [] })
    case types.get_cookie_car:  return Object.assign({},state,{car:payload})
    default: return state;
    }
};
export default reducer;