import React from 'react'
import '../../static/style/progressQuery.css'
import { getBankList, updateUserBankList, getCouponList, searchCouponList } from '../api/require.js'


class ProgressQuery extends React.Component {
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
        this.bankEditAble
        this.handleClick = this.handleClick.bind(this)
        this.handleSearchCouponList = this.handleSearchCouponList.bind(this)
    }
    linkTo(route, data) {
        this.props.history.push(route)
    }
    handleClick(e) {
        this.linkTo(e.key)
    }

    tabClick({index,bankId}){

        this.setState({
            activeNum:index,
            bankId
        })
        let userId = this.state.userId
        getCouponList({bankId,userId,page:1,limit:10}).then(res=>{
            
        })
    }

    changeEdit(status){
        this.setState({bankEditAble:status})
    }

    handleGetCouponList(){
        getCouponList().then(res=>{

        })
    }

    handleGetBankList(){
        getBankList().then(res=>{
            if(res.errno==0){
                this.setState({
                    banks:res.data.banks
                })
            }
        })
    }

    handleUpdateUserBankList({status, userId, bankId}){
        updateUserBankList({status, userId, bankId}).then(res=>{
            console.log(res)
        })
    }

    handleSearchCouponList(){

        let name = this.searchtext.value
        let bankId = this.state.bankId
        let userId = this.state.userId
        let page = 1
        let limit = 10
        searchCouponList({bankId,name,userId,page,limit}).then(res=>{
            console.log(res)
        })
    }
    
    componentDidMount() {
        mui('.mui-off-canvas-wrap').on('tap','.mui-icon-close',function(){
            mui('.mui-off-canvas-wrap').offCanvas('close');
        })
        
        mui('.cardstatus').on('tap','.asidemenu',function(){
            mui('.mui-off-canvas-wrap').offCanvas('show');
        })

        this.handleGetBankList()
        
    }
    render() {
        return (
            <div className="mui-off-canvas-wrap mui-slide-in">
                <aside className="mui-off-canvas-right">
                    <div className="mui-scroll-wrapper">
                        <div className="mui-scroll">
                            <div><span className="mui-icon mui-icon-close"></span></div>
                            <div className="mine">
                                <span>我的</span>
                                {
                                    this.state.bankEditAble ? <strong onClick={this.changeEdit.bind(this,false)}>编辑</strong>:<strong onClick={this.changeEdit.bind(this,true)}>完成</strong>
                                }
                                
                            </div>
                            {
                                this.state.bankEditAble ? (<div className="content">
                                {
                                    this.state.banks.map((item, index) => {
                                        return (
                                            <span key={item.id}>{item.displayName}</span>
                                        )
                                    })
                                }
                                
                            </div>) : (<div className="content">
                                {
                                    this.state.banks.map((item, index) => {
                                        return (
                                            <span key={item.id}>{item.displayName}<label className="mui-icon mui-icon-minus" onClick={this.handleUpdateUserBankList.bind(this,{status:2,bankId:item.id,userId:'23124324'})}></label></span>
                                        )
                                        
                                    })
                                }
                            </div>)
                            }
                            <div className="mine">
                                <span>更多</span>
                            </div>
                            <div className="content">
                                <span className="addbtn"><strong className="mui-icon mui-icon-plusempty"></strong><i>招商</i></span>
                                <span className="addbtn"><strong className="mui-icon mui-icon-plusempty"></strong><i>中信</i></span>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="mui-inner-wrap">
                    <div className="progressquery">
                        <div className="searcharea">
                            <input type="text" ref={input => this.searchtext = input} onBlur={this.handleSearchCouponList} className="search" placeholder="输入商品名称、银行等" />
                        </div>
                    <div className="cardstatuscontainer">
                        <div className="cardstatus">
                            {
                                this.state.banks.map((item, index) => {
                                    return (
                                        <span key={item.id} ref={index==0?'first':''} onClick={this.tabClick.bind(this,{index,bankId:item.id})} className={this.state.activeNum == index ? "bottomline" : ""}>{item.displayName}</span>
                                    )
                                })
                            }
                            <span className="mui-icon mui-icon-bars transparency"></span>
                            <strong className="asidemenu mui-icon mui-icon-bars"></strong>
                        </div>
                    </div>
                        <div className="statuslist">
                            <div className="bankcardinfo">
                                <img src={require('../../static/img/didilogo.png')}/>
                                <ul>
                                    <li><span>滴滴&nbsp;</span><span>|</span><span>&nbsp;快车&#x2022;50元拆分券</span></li>
                                    <li>
                                        <div className="price">&#xA5;17.8</div>
                                        <div className="love"><span className="mui-icon mui-icon-star"></span>&nbsp;<span>2</span></div>
                                        <div className="ordernum">
                                            <span>成交：</span>
                                            <span>8888单</span>
                                        </div>
                                    </li>
                                </ul>
						    </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
        }
        export default ProgressQuery
