import React from 'react';
import { connect } from 'react-redux'
import { MyContext } from '../mine/Mine'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.headerstyle = {
    }
    this.state = {

    }

    this.unsubscribe = null

    this.submitForm = this.submitForm.bind(this)

    this.textInput = React.createRef()

    this.focusInput = this.focusInput.bind(this)
  }

  submitForm(event) {
    //非受控组件表单提交
    let username = this.username.value //等同于 focusInput 中 this.textInput.current = this.username
    let password = this.password.value
    let remember = this.remember.checked
    this.loginForm = { username, password, remember }
    console.log(this.loginForm)
  }

  focusInput(){
    this.textInput.current.focus()
  }

  componentDidMount() {
  }
  componentWillUnmount() {
    //组件销毁之前取消监听，因为被销毁的组件无法响应store里面的数据变化。
    //this.unsubscribe()
  }
  render() {
    return (
      <div className='login'>
        <ul>
          <li><label>UserName&nbsp;:&nbsp;&nbsp;</label><input ref={input => this.username = input} type="text" className='shi-input' /></li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input ref={input => this.password = input} type="text" className='shi-input' /></li>
          <li><input type="submit" className='shi-input' value='登录' onClick={this.submitForm}/></li>
          <li><input type="checkbox" ref={input => this.remember = input}/>记住密码</li>
        </ul>
        <div style={{ width: '300px', height: '100px', border: '1px solid blue' }}>

          <input type='text' onBlur={this.props.changeText} ref={this.textInput}/>

          <span onClick={this.focusInput}>{this.props.text}</span><br />
          {this.props.num}
        </div>
        <MyContext.Consumer>
          { value => <span>{value}</span> }
        </MyContext.Consumer>
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
