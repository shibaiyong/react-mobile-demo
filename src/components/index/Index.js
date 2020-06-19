import React from 'react'
import { uploadImage, addCoupon,formatDate } from '../api/require.js'
import '../../static/style/memebercard.css'

import { ImagePicker, DatePicker, List } from 'antd-mobile';

const nowTimeStamp = Date.now();

const now = new Date(nowTimeStamp);

class IndexCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadAreas: [1],
            alertIsShow:false,
            couponForm:{
                code:'',
                endTime:now,
                img:'',
            },
            files:'',
            userId:'e83d30aaff73435a96e086cfcf89eeef',
            couponItem:[]
        }
        this.imgChange = this.imgChange.bind(this)
        this.addUploadArea = this.addUploadArea.bind(this)

        this.deleteUploadArea = this.deleteUploadArea.bind(this)
    }

    linkTo(route, data) {
        this.props.history.push(route)
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
    addUploadArea(){
        
        this.state.couponItem.push(this.state.couponForm)
        console.log(this.state.couponItem)
        this.setState({
            couponItem:this.state.couponItem,
            uploadAreas:this.state.uploadAreas.concat(1)
        })
    }

    deleteUploadArea(index){

        this.state.uploadAreas.splice(index,1)
        this.state.couponItem.splice(index,1)
        console.log(this.state.couponItem)
        this.setState({uploadAreas:this.state.uploadAreas})

    }
    imgChange(files, type, index){
        let formData = new FormData();
        let params = formData.append("files", files[0].file);
        uploadImage(params).then(res=>{
            console.log(res)
        })

    }

    dateChange(date){
      
        let newObject = Object.assign({},this.state.couponForm,{endTime:date})
        this.setState({couponForm:newObject})
    }

    codeChange(event){
        let e = event.nativeEvent
        let newObject = Object.assign({},this.state.couponForm,{code:e.target.value})
        this.setState({couponForm:newObject})
    }

    addCoupon(){

        const {endTime, code, img, userId} = this.state
        this.state.couponItem.push(this.state.couponForm)
        console.log(this.state.couponItem)

    }

    
    componentDidMount() {
        console.log(this.props.location)
    }

    render() {
        const { uploadAreas, alertIsShow } = this.state
        const {price, details, desc} = this.props.location.state
        return (
            <div className='index'>
                <div className="vipcard">
                    <ul>
                        <li><div>{desc}</div><strong>&#xA5;{price}</strong></li>
                        <li><span>{details}</span></li>
                    </ul>
                </div>
                <div className="uploadarea">
                    {/* <div style={{textAlign:'right'}}><button type="button" className="mybtn"><span className="mui-icon mui-icon-upload"></span>批量上传</button></div> */}
                    {
                        uploadAreas.map((item, index)=>{
                            return <ul key={index}>
                            <li></li>
                            <li className="ticketlist">
                                <div><strong>券{index+1}</strong><span>上传说明</span></div>
                                {index==0?'':<span className="mui-icon mui-icon-trash" onClick={this.deleteUploadArea.bind(index+1)}></span>}
                            </li>
    
                            <li className="inputlist">
                                <span>券码截图：</span>
                                <input type="text" className=""/>
                                <ImagePicker onChange={this.imgChange} length={1}/>
                            </li>
                            <li className="inputlist"><span>兑换码：</span><input type="text" className="" onChange={this.codeChange.bind(this)}/></li>
    
                            <li className="inputlist">
                                <DatePicker mode="date" title="日期" extra="请选择日期" value={this.state.couponForm.endTime} onChange={ this.dateChange.bind(this)}>
                                    <List.Item arrow="horizontal">有效日期:</List.Item>
                                </DatePicker>
                            </li>
                            <li></li>
                        </ul>})
                    }
                    <div style={{textAlign:'center'}}><button type="button" className="mybtn1" onClick={this.addUploadArea}><span className="mui-icon mui-icon-plus"></span>批量上传</button></div>
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
                        <span>联系客服</span><span onClick={ this.addCoupon.bind(this) }>立即发布</span>
                    </div>
                </div>

                {
                    alertIsShow && (<div className="alertmodelcontainer">
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
