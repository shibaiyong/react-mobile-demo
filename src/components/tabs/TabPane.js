import React from 'react'

class TabPane extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  componentDidMount(){
  }

  getTabs(){
    

  }

  render(){
    
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default TabPane