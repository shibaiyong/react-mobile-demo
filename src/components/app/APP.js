import React from 'react'
import { withRouter } from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props.match);
    // console.log(this.props.history);
    // console.log(this.props.location);

    // this.props.history.listen(() => {
    //   console.log('hahahahahha')
    // })
  }
  render() {
    return (
      <div className="rootContainer">
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(App)