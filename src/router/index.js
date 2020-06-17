import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux' // react和redux连接的桥梁，就是这个Provider

import Store from '../redux/store.js'

import IndexCom from '../components/index/Index'
import ProgressQuery from '../components/query/ProgressQuery'
import BuyInfo from '../components/buyinfo/BuyInfo'
import MineOrder from '../components/mineorder/MineOrder'

import App from '../components/app/APP'

const routerList = [
  {
    path: '/',
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


