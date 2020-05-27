import React from 'react'

class TabContent extends React.Component{
  constructor(props){
    super(props)

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  getPanels(){
    const { panels , activeIndex} = this.props;
    return React.Children.map(panels,(child)=>{
      let panelIndex=child.props.panelIndex;
      return React.cloneElement(child,{
        className:activeIndex==panelIndex?'activeIndex':'noIndex'
      })
    })
    
  }

  render(){
    return (
      <div>
        {this.getPanels()}
      </div>
    )
  }

}

export default TabContent