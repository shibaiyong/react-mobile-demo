import React from 'react';
import store from '../../redux/store'
import action from '../../redux/actions'
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.headerstyle = {

    }
    this.state = {
      num: store.getState().num,
      text: store.getState().text,
      registerForm:{
        username:'shi',
        password:'123',
        remember:true
      }
    }
    this.changeText = this.changeText.bind(this)
    this.changeNum = this.changeNum.bind(this)
    // this.handleActionChange = this.handleActionChange(this)
    this.unsubscribe = null
  }
  addDoThing() {

  }

  changeNum() {
    action.changeNum();
  }
  changeText(e) {
    var val = e.target.value;
    action.changeText(val);
  }

  handleActionChange(event){
    
    let e = event.nativeEvent

    //let tempState = {...this.state.registerForm,[atttibute]:e.target.value}

    let attribute = e.target.name

    let elementType = e.target.type

    let tempState

    if(elementType === 'checkbox' || elementType === 'radio'){

      tempState = Object.assign({},this.state.registerForm,{[attribute]:e.target.checked})

    }else{

      tempState = Object.assign({},this.state.registerForm,{[attribute]:e.target.value})

    }

    this.setState({
      registerForm:tempState
    })
  }

  submitForm() {
    //受控组件表单提交
    console.log(this.state.registerForm)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        num: store.getState().num,
        text: store.getState().text
      })
      //同步方式修改状态

      // this.setState(function (prevState, props) {
      //   return { num:store.getState().num}
      // })
    })
  }
  componentWillUnmount() {
    //组件销毁之前取消监听，因为被销毁的组件无法响应store里面的数据变化。
    this.unsubscribe()
  }
  render() {
    const registerForm = this.state.registerForm
    return (
      <div className='login'>
        <ul>
          <li><label>User Name&nbsp;:&nbsp;&nbsp;</label><input type="text" value={registerForm.username} onChange={this.handleActionChange.bind(this)} name='username' className='shi-input' /></li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input type="text" value={registerForm.password} onChange={this.handleActionChange.bind(this)} name='password' className='shi-input' /></li>
          <li><input type="submit" onClick={this.submitForm.bind(this)} className='shi-input' value='注册' /></li>
          <li><input type="checkbox" checked={registerForm.remember} name="remember" onChange={this.handleActionChange.bind(this)}/>记住密码</li>
        </ul>
        <div style={{ width: '300px', height: '100px', border: '1px solid red' }}>
          <button onClick={this.changeNum}>num++</button>
          {this.state.text}<br />
          {this.state.num}
        </div>
      </div>
    )
  }
}

export default Register
