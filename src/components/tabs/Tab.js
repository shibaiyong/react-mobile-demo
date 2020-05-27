import React from 'react'
import TabNav from './TabNav'
import TabContent from './TabContent'
import Header from '../common/Header.js'

class Tab extends React.Component{
  constructor(props){
    super(props)
    this.state={
      activeIndex:'1'
    }
    this.handelTabClick=this.handelTabClick.bind(this);
  }

  handelTabClick(activeIndex){
    this.setState({
      activeIndex:activeIndex
    })
  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  renderTabNav(){
    const {children}=this.props
    return <TabNav panels={children} tabClick={this.handelTabClick}></TabNav>
  }

  renderTabContent(){
    const {children}=this.props
    return <TabContent panels={children} activeIndex={this.state.activeIndex}></TabContent>
  }

  render(){
    return (
      <div>
        <Header/>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    )
  }

  
}

export default Tab