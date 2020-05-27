import React from 'react'

import Header from '../common/Header.js'
import Body from '../common/Body.js'

import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class IndexCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            middleData: [0]
        }
        this.transmitData = this.transmitData.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    transmitData(data) {
        this.setState({
            middleData: data
        })
    }
    linkTo(route, data) {

        this.props.history.push(route)
    }
    handleClick(e) {
        this.linkTo(e.key);
    }
    componentDidMount() {
        // console.log(this.props.match);
        // console.log(this.props.history);
        // console.log(this.props.location);
    }
    render() {

        let backAndTextColor = {
            backgroundColor: 'red',
            color: 'white',
            fontSize: 40
        };
        return (
            <div className='index'>
                <Header outputData={this.transmitData} />
                <Body Things={this.state.middleData} />
                <div style={{ float: 'left', position: 'absolute', top: '80px', left: '40px' }}>
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 240 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline">
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <MenuItemGroup key="g1" title="第一组">
                                <Menu.Item key="/tabs">Tab切换</Menu.Item>
                                <Menu.Item key="/list">列表页</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup key="g2" title="第二组">
                                <Menu.Item key="/broadcast">轮播图</Menu.Item>
                                <Menu.Item key="/paginationcom">分页组件</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
export default IndexCom
