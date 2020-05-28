import React from 'react'
import Header from '../common/Header.js'
import Body from '../common/Body.js'

import { getWeather } from '../api/require.js'


class IndexCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            middleData: [0]
        }
        this.transmitData = this.transmitData.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    transmitData(data) {
        this.setState({
            middleData: data
        })
    }
    linkTo(route, data) {

        this.props.history.push(route)
    }
    handleClick(e) {
        this.linkTo(e.key);
    }
    componentDidMount() {
        getWeather().then(res => {
            console.log(res)
        })
    }
    render() {

        let backAndTextColor = {
            backgroundColor: 'red',
            color: 'white',
            fontSize: 40
        };
        return (
            <div className='index'>
                <Header outputData={this.transmitData} />
                <Body Things={this.state.middleData} />
                
            </div>
        )
    }
}
export default IndexCom
