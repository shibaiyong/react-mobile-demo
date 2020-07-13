import React from 'react'
import { Route, BrowserRouter, Switch, Redirect, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux' // react和redux连接的桥梁，就是这个Provider

import Store from '../redux/store.js'

import IndexCom from '../components/index/Index'
import ProgressQuery from '../components/query/ProgressQuery'
import BuyInfo from '../components/buyinfo/BuyInfo'
import MineOrder from '../components/mineorder/MineOrder'
import PersonalCenter from '../components/personalcenter/PersonalCenter'
import Login from '../components/logins/Login'
import Register from '../components/logins/Register'


import App from '../components/app/APP'
import { Mine } from '../components/mine/Mine.js';

const routerList = [
  {
    path: '/index',
    component: IndexCom,
    auth: true,
    title:'首页'
  },{
    path: '/progressquery',
    component: ProgressQuery,
    auth: true,
    title:'进度查询'
  },{
    path: '/buyinfo',
    component: BuyInfo,
    auth: true,
    title:'购买'
  },{
    path: '/mineorder',
    component: MineOrder,
    auth: true,
    title:'我的订单'
  },{
    path: '/personalcenter',
    component: PersonalCenter,
    auth: true,
    title:'个人中心'
  },{
    path: '/mine/login',
    component: Login,
    ParentComponent:Mine,
    auth: true,
    title:'登录'
  },{
    path: '/mine/register',
    component: Register,
    ParentComponent:Mine,
    auth: true,
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
      return <Redirect to='/progressquery'/>
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
  <HashRouter>
    <Provider store={Store}>
      <App>
        <Switch>
          <RouterBefore routerList={routerList}/>
        </Switch>
      </App>
    </Provider>
  </HashRouter>
)


export default Root


