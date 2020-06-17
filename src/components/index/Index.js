import React from 'react'
import { getWeather } from '../api/require.js'
import '../../static/style/memebercard.css'

import { ImagePicker } from 'antd-mobile';


class IndexCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            middleData: [0],
            alertIsShow:true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    linkTo(route, data) {
        this.props.history.push(route)
    }
    handleClick(e) {
        this.linkTo(e.key);
    }
    hideAlert(status){
        if(status === 'show'){
            this.setState({
                alertIsShow:true
            })
        }else{
            this.setState({
                alertIsShow:false
            })
        }
        
    }
    componentDidMount() {
        getWeather().then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className='index'>
                <div className="vipcard">
                    <ul>
                        <li><div><span>百度网盘</span><span>&nbsp;|&nbsp;</span><span>超级会员卡</span></div><strong>&#xA5;88.8</strong></li>
                        <li><span>信用卡值越高，出售价格越高</span></li>
                    </ul>
                </div>
                <div className="uploadarea">
                    <ImagePicker/>
                    <ul>
                        
                        <li><button type="button" className="mybtn"><span className="mui-icon mui-icon-upload"></span>批量上传</button></li>
                        <li className="ticketlist"><div><strong>券1</strong><span>上传说明</span></div><span className="mui-icon mui-icon-trash"></span></li>

                        <li className="inputlist"><span>券码截图：</span><input type="text" className="" /></li>
                        <li className="inputlist"><span>兑换码：</span><input type="text" className="" /></li>
                        <li><button type="button" className="mybtn1"><span className="mui-icon mui-icon-plus"></span>批量上传</button></li>
                    </ul>
                </div>

                <div className="tipcontent">
                    <h3>权益来源提示</h3>
                    <ul>
                        <li>活动路径本平台，哈哈哈哈，呵呵呵呵呵呵嘿额呵呵。</li>
                        <li>1.活动路径本平台，哈哈哈。</li>
                        <li>2.活动路径本平台，哈哈哈哈，呵呵呵呵呵呵嘿额呵。</li>
                    </ul>
                    <h3>权益来源提示</h3>
                    <ul>
                        <li>活动路径本平台，哈哈哈哈，呵呵呵呵呵呵嘿额。</li>
                        <li>1.活动路径本平台，哈哈哈。</li>
                        <li>2.活动路径本平台，哈哈哈哈，呵呵呵呵呵呵嘿额呵。</li>
                    </ul>
                </div>

                <div className="buttonwrapper">
                    <div className="buttoncontainer">
                        <span>联系客服</span><span onClick={ this.hideAlert.bind(this,'show') }>立即发布</span>
                    </div>
                </div>

                {
                    this.state.alertIsShow && (<div className="alertmodelcontainer">
                        <div className="alertModel">
                            <div className="alert-body">
                                <div className="alert_title">售前确认</div>
                                <div className="alert_content">
                                    <div className="mui-input-row mui-radio mui-left">
                                        <label>我去抱山东舰弗兰克斯，好啊举个。</label>
                                        <input name="radio1" type="radio"/>
                                    </div>
                                    <div className="mui-input-row mui-radio mui-left">
                                        <label>我去抱山东舰弗兰克斯，好啊举。</label>
                                        <input name="radio2" type="radio"/>
                                    </div>
                                </div>
                                <div className="form-grounp compelet">
                                    <span onClick={ this.hideAlert.bind(this,'hide') }>取消</span>
                                    <span>确定</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}
export default IndexCom
