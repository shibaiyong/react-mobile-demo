import React from 'react'
import PageCom from '../common/Pagination'
import { getWeather } from '../api/require'

class PaginationCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataLen: 100,
            eachPageShow: 10,
            showButtonNum: 5
        }
    }
    getWeather15() {
        getWeather().then(res => {
            
        }).catch(err => {
            
        })
    }
    componentDidMount() {
        //this.props.history.push('/list')
        this.getWeather15()
    }
    render() {
        return (
            <div className="paginationcontainer">
                <PageCom dataLength={this.state.dataLen} eachPageShow={this.state.eachPageShow} showButtonNum={this.state.showButtonNum} />
            </div>
        )
    }
}

export default PaginationCom