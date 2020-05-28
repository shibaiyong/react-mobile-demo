import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux' // react和redux连接的桥梁，就是这个Provider

import Store from '../redux/store.js'

import IndexCom from '../components/index/Index.js'
import {Mine} from '../components/mine/Mine.js'
import Login from '../components/logins/Login'
import Register from '../components/logins/Register'
import App from '../components/app/APP'

const routerList = [
  {
    path: '/',
    component: IndexCom,
    auth: true,
    title:'首页'
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


