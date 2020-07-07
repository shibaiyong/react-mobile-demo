import React from 'react';
import { connect } from 'react-redux';
import { List, InputItem,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

class Login extends React.Component {
  
  submitForm = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        console.log(this.props.form.getFieldError('tel'));
      }
    })
  }

  validatePassword(rule, value, callback){
    if (value && value.length >=8) {
      callback();
    } else if(value.length===0){
      callback(new Error('请输入密码'));
    } else {
      callback(new Error('请输入至少8位密码'));
    }
  }


  validateTel(rule, value, callback){
    if (value && value.length===13) {
      callback();
    } else if(value.length===0){
      callback(new Error('请输入电话号码'));
    } else {
      callback(new Error('电话号码不合法'));
    }
}

  

  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className='login'>
        <ul>
          <li>
            
            <List>
              <InputItem {...getFieldProps('password', {
                            rules: [
                            { validator: this.validatePassword }
                            ],
                        })}
                        onErrorClick={() => {
                          Toast.info(getFieldError('password'), 1)
                          }}
                          >Password:</InputItem>
              <InputItem {...getFieldProps('tel', {
                            rules: [
                            { validator: this.validateTel}
                            ],
                        })}
                        onErrorClick={() => {
                          Toast.info(getFieldError('tel'), 1)
                          }}
                        type="phone">Phone:</InputItem>
            </List>
            
            </li>
          
          <li><input type="submit" className='shi-input' value='登录' onClick={this.submitForm}/></li>
          <li><input type="checkbox" ref={input => this.remember = input}/>记住密码</li>
          <li>{this.props.num}</li>
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
    changeNum: () => dispatch({ type: 'changenum', num: num }),
    changeText: (e) => {
      var val = e.target.value
      dispatch({ type: 'changetext', text: val })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(createForm()(Login))
