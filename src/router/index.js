import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'; // react和redux连接的桥梁，就是这个Provider

import Store from '../redux/store.js';

import IndexCom from '../components/index/Index.js'
import Detail from '../components/details/Detail.js'
import {Mine} from '../components/mine/Mine.js'
import List from '../components/pageList/List.js'
import Login from '../components/logins/Login'
import Register from '../components/logins/Register'
import Tabs from '../components/tabs/TabUI'
import Broadcast from '../components/common/Broadcast'
import App from '../components/app/APP'
import paginationCom from '../components/paginationCom/paginationCom'

const supportsHistory = 'pushState' in window.history

// const IndexCom = React.lazy(() => import('../components/index/Index.js'))
// const Register = React.lazy(() => import('../components/logins/Register'))
// const Login = React.lazy(() => import('../components/logins/Login'))


// react-router 4.0之前的路由写法
// const Root = () => (
//   <Router history={browserHistory}>
//     <Route path="/" component={IndexCom}></Route>
//     <Route path='/detail' component={Detail}></Route>   
//     <Route path='/tabs' component={Tabs}></Route>
//     <Route path='/list' component={List}></Route>
//     <Route path='/broadcast' component={Broadcast}></Route>
//     <Route path='/mine' component={Mine}>
//       <IndexRoute component={Login}/> 
//       <Route path='/mine/login' component={Login}></Route>
//       <Route path='/mine/register' component={Register}></Route>
//     </Route>
//   </Router>
// )

// const Root = () => (
//   <BrowserRouter forceRefresh={!supportsHistory}>
//     <Provider store={Store}>
//       <App>
        
//         <Switch>
//           <Route exact path="/" component={IndexCom}></Route>
//           <Route path='/detail' component={Detail}></Route>
//           <Route exact path='/tabs' component={Tabs}></Route>
//           <Route exact path='/list' component={List}></Route>
//           <Route path='/broadcast' component={Broadcast}></Route>
//           <Route path='/paginationcom' component={paginationCom}></Route>
//           <Mine>
//             <Route exact path='/mine/login' component={Login}></Route>
//             <Route path='/mine/register' component={Register}></Route>
//           </Mine>
//         </Switch>
        
//       </App>
//     </Provider>
//   </BrowserRouter>
// )




// react-router 4.x 新的写法
// render 方法渲染组件时,props要显式的传入组件中;这里的props分别代表 history location match;这样在根组件中就可以使用了，否则在app组件中无法使用。
// const Router = ({ component: Component, children }) => 
//   (<Route
//     render={props => {

//       let renderRouter = children.find(item => item.props.path == props.location.pathname)
//       return (<Component {...props}><Switch>{children}</Switch></Component>)
//     }
//     }
//   />)

const routerList = [
  {
    path: '/',
    component: IndexCom,
    auth: true,
    title:'首页'
  }, {
    path: '/detail',
    component: Detail,
    auth: true,
    title:'详情页'
  }, {
    path: '/tabs',
    component: Tabs,
    title:'tab页'
  }, {
    path: '/list',
    component: List,
    title:'列表页'
  }, {
    path: '/broadcast',
    component: Broadcast,
    title:'轮播图'
  }, {
    path: '/paginationcom',
    component: paginationCom,
    title: '分页'
  }, {
    path: '/mine/login',
    ParentComponent: Mine,
    component: Login,
    title:'登录'
  }, {
    path: '/mine/register',
    ParentComponent: Mine,
    component: Register,
    title:'注册'
  }
]


class RouterBefore extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    
    const { location : { pathname },routerList } = this.props;
    
    const TargetRoute = routerList.find(( item ) => {
      return item.path === pathname
    })
    if(!TargetRoute){//路由不合法,重定向
      return <Redirect to='/'/>
    }

    const { path, component, ParentComponent, title } = TargetRoute

    document.title = title

    if(!ParentComponent){//没有子路由的组件

      return <Route exact path={ path } component={ component } />

    }else{//有子路由的组件

      return <Route
        render = {
          props => {
            return (<ParentComponent {...props}><Route exact path={ path } component={ component } /></ParentComponent>)
          }
        }/>
    }
    
  }
}

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <App>
        <Switch>
          <RouterBefore routerList={routerList}/>
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>
)


export default Root


