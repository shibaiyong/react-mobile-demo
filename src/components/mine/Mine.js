import React from 'react';
import Header from '../common/Header'

//Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。

const MyContext = React.createContext('light');

class Mine extends React.Component {
  constructor(props) {
    
    super(props)
    this.headerstyle = {
    }
    this.isShowLogin = true
    this.state = {
      theme:'dark'
    }
  }
  
  addDoThing() {

  }

  componentDidMount() {
    // console.log(this.props)
    setTimeout(()=>{
      this.setState({
        theme:'light'
      })
    },2000)
  }

  render() {

    const { theme } = this.state

    return (
      <MyContext.Provider value={theme}>
      <div className='mine'>
        
        <Header isShowLogin={this.isShowLogin} />
        {this.props.children}
        
      </div>
      </MyContext.Provider>
    )

  }
}




export {Mine,MyContext}
