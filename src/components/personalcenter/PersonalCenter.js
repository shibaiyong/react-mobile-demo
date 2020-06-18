import React from 'react'
import '../../static/style/percenalcenter.css'
import { getBankList, updateUserBankList, getCouponList, searchCouponList } from '../api/require.js'


class PersonalCenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            middleData: [0],
            banks:[],
            activeNum:0,
            bankEditAble:true,
            bankId:'',
            userId:'e83d30aaff73435a96e086cfcf89eeef'
        }
        
    }
    linkTo(route, data) {
        this.props.history.push(route)
    }
    
    componentDidMount() {
      
    }
    render() {
        return (

          <div className="agentcenter">
        <div className="userinfocontainer">
            <div className="userinfo">
                <div className="message">
                    <img src={require('../../static/img/personcenter.png')} />
                </div>
                <ul>
                    <li><span>王二麻子</span></li>
                    <li><span>ID:18309876543</span></li>
                </ul>
            </div>
            <div className="menu">
                <dl>
                    <dt>0</dt>
                    <dd>出售中</dd>
                </dl>
                <dl>
                    <dt>5</dt>
                    <dd>已下架</dd>
                </dl>
                <dl>
                    <dt>6</dt>
                    <dd>已出售</dd>
                </dl>
                <dl>
                    <dt>8</dt>
                    <dd>纠纷单</dd>
                </dl>
            </div>

            <div className="wallet">
                <span>交易前保</span>
                <div className="restpay">
                    <span>余额：6.00元</span>
                    <span style={{fontSize:'0.2rem'}} className="mui-icon mui-icon-forward"></span>
                </div>
            </div>
        </div>

        <div className="linebar"></div>

        <div className="item-list">
            <h3>我的服务</h3>
            <div className="myservice menu">
                <dl>
                    <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                    <dd>业绩总览</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                    <dd>进度查询</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                    <dd>绑结算卡</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                    <dd>招募伙人</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                    <dd>招募伙人</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                    <dd>招募合人</dd>
                </dl>
            </div>
        </div>
        <div className="item-list item-list-second">
                <h3>用卡工具</h3>
                <div className="myservice menu">
                    <dl>
                        <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                        <dd>业绩总览</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                        <dd>进度查询</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                        <dd>绑结算卡</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/order@2x.png')} /></dt>
                        <dd>招募合人</dd>
                    </dl>
                    
                </div>
            </div>
    </div>)
  }
}
export default PersonalCenter
