import React from 'react'
import Tab from './Tab'
import TabPane from './TabPane'
import { withRouter } from 'react-router-dom'
class Tabs extends React.Component{
  constructor(props){
    super(props)
    
  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return (
      <Tab>
        <TabPane key={0} tabcontent={'tabpane1'} panelIndex='1'>tabpane111111111111</TabPane>
        <TabPane key={1} tabcontent={'tabpane2'} panelIndex='2'>tabpane222222222222</TabPane>
        <TabPane key={2} tabcontent={'tabpane3'} panelIndex='3'>tabpane333333333333</TabPane>
      </Tab>
    )
  }
}


export default Tabs