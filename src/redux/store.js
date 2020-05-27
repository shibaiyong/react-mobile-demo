import { createStore } from 'redux'
import action from './actions'

var copystate={
  num:0,
  text:'hello word'
}

//面向对象的编程方法，createStore相当于构造函数。而且reducer是纯函数。
var reducer = (state={  //注意传参数的方式
  num:0, text:'hello word11'},action)=>{
  switch(action.type) {
    case 'changenum':
      copystate.num++;  //不建议直接修改state,可以采用 ... 或者 Object.assign()
      return Object.assign({},state,{num:copystate.num})
      break;
    case 'changetext':
      return Object.assign({},state,{text:action.text})
      break;
    default :
      return state;
  }
}

var store = createStore(reducer)

export default store