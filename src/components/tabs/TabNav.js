import React from 'react'
// import { list } from '_postcss@6.0.22@postcss';

class TabNav extends React.Component{
  constructor(props){
    super(props)
    this.nav={
      float:'left',
      padding:'0 15px'
    }
  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  getTabs(){
    const {panels,tabClick} = this.props;
    return React.Children.map(panels,(child)=>{
      
      const { panelIndex } = child.props;
      return (
        <li style={this.nav} onClick={tabClick.bind(null,panelIndex)}>
          {child.props.tabcontent}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className='tabpane' style={{overflow:'hidden'}}>
        {this.getTabs()}
      </ul>
    )
  }
}

export default TabNav