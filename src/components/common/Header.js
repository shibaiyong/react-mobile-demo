import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.headerstyle = {

        }
        this.state = {
            headerContent: 'ToDoList',
            willDoThing: [],
        }
        //this.addDoThing = this.addDoThing.bind(this)
    }
    addDoThing(SyntheticEvent) {
        //需要传入额外参数时，事件对象放在最后传入，并且不能省略。
        //console.log(SyntheticEvent.nativeEvent)
        let e = SyntheticEvent.nativeEvent
        if (e.keyCode == 13) {
            this.state.willDoThing.push(e.target.value)
            //异步
            this.setState({
                willDoTing: this.state.willDoThing
            })
            //同步
            // this.setState((prevState,prop)=>({
            //   willDoTing:prevState
            // }))
            this.props.outputData(this.state.willDoThing);
            e.target.value = '';
        }
    }
    linkTo(path) {
        this.props.history.push(path)
    }
    componentDidMount() {
        
    }
    render() {

        // let loginInfo = this.props.isShowLogin ? (<div className="login-info"><span onClick={ this.linkTo.bind(this,'/mine/login')}>Login</span>&nbsp;&nbsp;
        // <span onClick={ this.linkTo.bind(this,'/mine/register') }>Register</span>&nbsp;&nbsp;</div>) : '';
        //let goLogin = this.props.isShowLogin ? '' : <Link to='/mine'>去登录</Link>;
        let loginInfo = this.props.isShowLogin ? (<div className="login-info"><Link to="/mine/login"><span>Login</span></Link>&nbsp;&nbsp;
        <Link to="/mine/register"><span>Register</span></Link>&nbsp;&nbsp;</div>) : '';
        let goLogin = this.props.isShowLogin ? '' : <Link to='/mine/login'>去登录</Link>;

        return (
            
            <div className='header'>
                {goLogin}
                <header>
                    <Link to="/">{this.state.headerContent}</Link>
                    <input onKeyUp={this.addDoThing.bind(this)} style={this.headerstyle} placeholder='To Do List' type='text' />
                </header>
                {
                    this.props.isShowLogin && (<div className="login-info">
                                                    <Link to="/mine/login"><span>Login</span></Link>&nbsp;&nbsp;
                                                    <Link to="/mine/register"><span>Register</span></Link>&nbsp;&nbsp;
                                                </div>)
                }
            </div>
        )
    }
}

export default Header
