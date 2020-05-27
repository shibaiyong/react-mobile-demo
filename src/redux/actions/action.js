export default class AdviserActions {
  // 用户点击按钮时，将触发此方法
  static addNumOne(num) {
    return {                          // 这个return,实际上是触发了action,redux会自动去触发reducer中对应的方法
      type: 'add',                    // 与reducer中的type对应
      payload: num + 1
    }
  }
  static changeString(str){
    return {
      type:'change',
      payload:str
    }
  }
}