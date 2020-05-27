import React from 'react'

import Header from '../common/Header.js'
import Footer from '../common/Footer.js'
import { BrowserRouter } from 'react-router-dom'
const { history:myhistory, location } = new BrowserRouter()

class List extends React.Component {
  constructor(props) {
    super(props)
    this.listData = [
      { id: 1, name: 'hahah111' },
      { id: 2, name: 'hahah222' },
      { id: 3, name: 'hahah333' },
      { id: 4, name: 'hahah444' },
      { id: 5, name: 'hahah555' },
      { id: 6, name: 'hahah666' },
      { id: 7, name: 'hahah777' }
    ]
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(myhistory)
    console.log(this.props.history)
    myhistory.push('/')
  }
  linkTo(id, name) {
		//this.props.history.push('/detail',{ id: id,name: name }) //两种方式跳转都行
    this.props.history.push({pathname: '/detail', state: { id: id, name: name }})
    
  }
  render() {
    return (
      <div className="list">
        <Header />
        <ul>
          {
            this.listData.map((item, index) => {
              return (
                <li key={index} onClick={this.linkTo.bind(this, item.id, item.name)}>
                  {item.id}-------------------------------------{item.name}
                </li>
              )
            })
          }
        </ul>
        <Footer />
      </div>

    )
  }
}


export default List