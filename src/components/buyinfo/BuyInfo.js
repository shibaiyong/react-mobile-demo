import React from 'react'
import '../../static/style/buyinfo.css'


class BuyInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            middleData: [0]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    linkTo(route, data) {
        this.props.history.push(route)
    }
    handleClick(e) {
        this.linkTo(e.key)
    }

    componentDidMount() {
        
    }
    render() {
        return (
            <div className="mui-off-canvas-wrap mui-slide-in mui-draggable">
                <div className="mui-inner-wrap">
                    <div className="buyinfo">
                        <div className="statuslist">
                            <div className="bankcardinfo">
                                <img src={require("../../static/img/didilogo.png")} alt=""/>
                                <ul>
                                    <li><span>滴滴&nbsp;</span><span>|</span><span>&nbsp;快车&#x2022;50元拆分券</span></li>
                                    <li className="source">银行活动获得</li>
                                    <li className="price">&#xA5;39.99</li>
                                    <li className="transition">
                                        <div className="hassale">已成交3766单</div>
                                        <div className="onsale">出售中3766单</div>
                                    </li>
                                </ul>
						    </div>
                        </div>
                    </div>

                    <div className="notice">
                        <h3>购买须知</h3>
                        <ul>
                            <li>1.经想带你过生日你是，广汽无效</li>
                            <li>2.结算司出示相关卡券即，可抠出相关奋勇</li>
                        </ul>
                    </div>

                    <div className="notice">
                        <h3>商品详情</h3>
                        <ul>
                            <li>1.经想带你过生日你是，广汽无效</li>
                            <li>2.结算司出示相关卡券即，可抠出相关奋勇</li>
                            <li>3.经想带你过生日你是，广汽无效</li>
                            <li>4.结算司出示相关卡券即，可抠出相关奋勇</li>
                        </ul>
                    </div>
                </div>
                <div className="buttonwrapper">
                    <div className="buttoncontainer">
                        <span>
                            <div className="total">合计：<span>&#xA5;39.00</span></div>
                            <div className="count">

                                <button className="mui-btn" type="button">-</button>
                                <input className="mui-numbox-input" type="number" defaultValue="2" />
                                <button className="mui-btn" type="button">+</button>

                            </div>
                        </span>
                        <span>立即购买</span>
                    </div>
                </div>
            </div>
            )
        }
    }
export default BuyInfo
