import React from 'react'
import '../../static/style/mineorder.css'


class MineOrder extends React.Component {
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
                    <div className="progressquery mineorder">
                        <div className="searcharea">
                            <input type="text" className="search" placeholder="输入商品名称、银行等" />
                        </div>

                        <div className="cardstatus">
                            <span className="bottomline" tag="已申卡">出售中</span>
                            <span>已下架</span>
                            <span>已出售</span>
                            <span>纠纷单</span>
                        </div>

                        <div className="statuslist">
                            <div className="bankcardinfo">
                                <img src={require("../../static/img/didilogo.png")} alt="" />
                                <ul>
                                    <li><span>滴滴&nbsp;</span><span>|</span><span>&nbsp;快车&#x2022;50元拆分券</span></li>
                                    <li>下架时间：2020/12/12 06:06</li>
                                    <li>券码：**** **** 686980904567</li>
                                </ul>
                                <dl>
                                    <dt><strong>&#xA5;88.8</strong></dt>
                                    <dd><img src={require("../../static/img/didilogo.png")} alt="" /></dd>
                                </dl>
                            </div>
                            <div className="reason">
                                <span>下架原因：</span><span>串码有误</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MineOrder
