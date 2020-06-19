import React from 'react'
import '../../static/style/mineorder.css'
import { updateSailCoupon } from '../api/require.js'


class MineOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            couponStatus: [{
                id:1,
                name:'出售中'
            },{
                id:2,
                name:'已下架'
            },{
                id:3,
                name:'已出售'
            },{
                id:4,
                name:'纠纷单'
            }],
            activeNum:0,
            userId:'e83d30aaff73435a96e086cfcf89eeef',
            status:1
        }

    }
    linkTo(route, data) {

        this.props.history.push(route)
        
    }

    updateSailCoupon(){
        updateSailCoupon().then(res=>{

        })
    }

    tabClick({index,status}){
        this.setState({
            activeNum:index,
            status
        })
        let userId = this.state.userId
        // getCouponList({bankId,userId,page:1,limit:10}).then(res=>{
            
        // })
    }

    removeSail(id){
        console.log(id)
    }

    conditionShow(id){

        let status;

        if(this.state.status == 1){

            status = <div className="remove"><span onClick={this.removeSail.bind(this,id)}>我要下架</span></div>

        }else if(this.state.status == 2){

            status = <div className="reason"><span>下架原因：</span><span>串码有误</span></div>
        }

        return status

    }

    componentDidMount() {

    }
    render() { 
        return (
            <div className="mui-off-canvas-wrap mui-slide-in mui-draggable">
                <div className="mui-inner-wrap">
                    <div className="mineorder">
                        <div className="searcharea">
                            <input type="text" className="search" placeholder="" />
                        </div>

                        <div className="cardstatus">


                            {
                                this.state.couponStatus.map((item, index) => {
                                    return (
                                        <span key={item.id} onClick={this.tabClick.bind(this,{index,status:item.id})} className={this.state.activeNum == index ? "bottomline" : ""}>{item.name}</span>
                                    )
                                })
                            }
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

                            { this.conditionShow(1) }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MineOrder
