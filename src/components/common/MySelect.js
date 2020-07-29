import React from 'react';
import { Link } from 'react-router-dom'

class MySelect extends React.Component {

    constructor(props) {
      
      super(props)
      console.log(this.props.defaultValue)
      this.state={
        isShow:false,
        activeItem:'',
        defaultValue:this.props.defaultValue
      }
    }

    setInputValue(val,id){
      this.setState({
        activeItem:id,
        defaultValue:val
      })
      this.props.onChange(val,id,this.props.selectIdName)
    }

    setDefaultValue(){
      if(this.props.defaultValue){

        let item = this.props.datas.find((item,index)=>{
          return item.id == this.props.defaultValue
        })

        console.log(item.value)

        this.setState({
          defaultValue:item.value
        })

        console.log()
        
      }
    }

    componentWillReceiveProps(nextProp){
      console.log(nextProp)
    }
    
    componentDidMount() {

      // 获取选择框的ref，当在组件外点击时的时候收起下拉框
      document.addEventListener('click', (e) => {
        console.log(this.myinput.contains(e.target))
        if (this.myinput && this.myinput !== e.target && !this.myinput.contains(e.target)) {
          
          this.setState({
            isShow:false
          })
        }
        //这里的true 和 false 对最终实现的效果有至关重要的影响，根据需要设置,这里适合false。
        //若为true,捕获阶段执行，先于下拉数据项上的点击事件执行，下拉选项会收起。从而导致，下拉数据项上的点击事件无法被触发。
        //若为false,冒泡阶段执行，情况与以上相反。
      }, true)

      this.setDefaultValue();
      
    }
    render() {
      const {datas, children, onChange, selectIdName} = this.props
      return (
        <div className="myselect" style={{ width: '300px',margin:'0 auto',position:'relative'}} onClick={()=>{
          this.setState({
          isShow:true
        })}}>
        <input type="text" value={this.state.defaultValue} ref={input => this.myinput = input} onChange={()=>{}}/>
        <span style={{ position:'absolute',top:0,right:0}}>{children}</span>
          <ul className={this.state.isShow ? 'showMyselect':'hiddenMyselect'}>
            {
              (datas||[]).map((item,index)=>{
                return <li key={item.id} className={this.state.activeItem==item.id?'ative':''} onClick={this.setInputValue.bind(this,item.value,item.id)}>{item.value}</li>
              })
            }
          </ul>
      </div>
      )
    }
}

export default MySelect
