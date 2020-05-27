
//state 中数据的初始状态

const initeState = {
  inputValue:0
}

/* action 对应的处理方法，用于更新state中的数据 */

const add = (state, action) => {
  const { addvalue } = action;
  // 原本初始的时候，inputvalue,这里将最新的payload覆盖原来的值
  return Object.assign({}, state, {
    inputvalue: addvalue
  });
};


const addNum = ( state = initeState, action ) => {
  console.log(action.type);
  switch(action.type){
    case 'add': return add(state,action);
    default : return null;
  }
}

export default addNum;