import React from 'react'
// import { browserHistory } from 'react-router'
import { withRouter } from 'react-router-dom'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bodyContent: 'Hello Word!!!',
      willToDoThings: [],
      completeThings: []
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContent) {
    //console.log(this.props)  //可以获得最新的prop
    //console.log(nextProps)   //同上
    this.setState({
      willToDoThings: nextProps.Things
    })
  }
  linkTo(id, name) {
    this.props.history.push({ pathname: '/detail', state: { id: id, name: name } })
  }
  deleteThing(index) {
    var len = this.state.willToDoThings.length;
    for (var i = 0; i < len; i++) {
      if (i === index) {
        let val = this.state.willToDoThings.splice(i, 1);//返回值是别删除的项
        console.log(val)
        this.setState({
          willToDoThings: this.state.willToDoThings
        })
      }
    }
  }
  completeThing(index) {
    var len = this.state.willToDoThings.length;
    for (var i = 0; i < len; i++) {
      if (i === index) {
        let val = this.state.willToDoThings.slice(i, i + 1);//返回值是别删除的项
        this.state.completeThings.push(val)
        this.setState({
          completeThing: this.state.completeThing
        })

        this.deleteThing(index);
      }
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='body'>
        <h5>正在进行</h5>
        <ul className="listitem">
          {
            this.state.willToDoThings.map((item, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" />
                  <p>{item}</p>
                  <span onClick={this.linkTo.bind(this, index, item)}>详</span>
                  <span onClick={this.deleteThing.bind(this, index)}>删</span>

                </li>
              )
            })
          }
        </ul>
        <h5>已完成</h5>
        <ul>
          {
            this.state.completeThings.map((item, index) => {
              return (
                <li key={index}>{index}--{item}</li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

export default withRouter(Body)