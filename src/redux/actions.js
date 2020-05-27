import store from './store'

export default {
  changeNum:(num) => {
    var action={
      type:'changenum',
      num:num
    }
    store.dispatch(action)
  },
  changeText:function(text){
    var action={
      type:'changetext',
      text:text
    }
    store.dispatch(action)
  }
}