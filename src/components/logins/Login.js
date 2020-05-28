import React from 'react';
import { connect } from 'react-redux';
import { List, InputItem, WhiteSpace } from 'antd-mobile';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.headerstyle = {
    }
    this.state = {

    }

    this.unsubscribe = null

    this.submitForm = this.submitForm.bind(this)

  }

  submitForm(event) {
    //非受控组件表单提交
    let username = this.username.value //等同于 focusInput 中 this.textInput.current = this.username
    let password = this.password.value
    let remember = this.remember.checked
    this.loginForm = { username, password, remember }
    console.log(this.loginForm)
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className='login'>
        <ul>
          <li>
            <label>UserName&nbsp;:&nbsp;&nbsp;</label>
            <InputItem clear ref={input => this.username = input}></InputItem>
            </li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input ref={input => this.password = input} type="text" className='shi-input' /></li>
          <li><input type="submit" className='shi-input' value='登录' onClick={this.submitForm}/></li>
          <li><input type="checkbox" ref={input => this.remember = input}/>记住密码</li>
        </ul>
        
      </div>
    )
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    num: state.num,
    text: state.text
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    // changeNum: () => dispatch({ type: 'changenum', num: num }),
    changeText: (e) => {
      var val = e.target.value
      dispatch({ type: 'changetext', text: val })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
