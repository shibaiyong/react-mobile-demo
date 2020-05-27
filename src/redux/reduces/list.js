//state 中数据的初始状态

const initeState = {
  changstring:''
}

/* action 对应的处理方法，用于更新state中的数据 */

const change = (state, action) => {
  const { changstring } = action;
  // 原本初始的时候，inputvalue,这里将最新的payload覆盖原来的值
  return Object.assign({}, state, {
    changstring: changstring
  });
};


const changeStr = ( state = initeState, action ) => {
  console.log(action.type);
  switch(action.type){
    case 'changstring': return change(state,action);
    default: return null;
  }
}

export default changeStr;