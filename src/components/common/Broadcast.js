import React from 'react'

import Header from '../common/Header.js'

class Broadcast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smallImgList: [
                { id: 1, url: require('../../static/img/1.png') },
                { id: 2, url:  require('../../static/img/2.png') },
                { id: 3, url:  require('../../static/img/3.png') },
                { id: 4, url:  require('../../static/img/4.png') },
                { id: 5, url:  require('../../static/img/5.png') },
                { id: 6, url:  require('../../static/img/6.jpg') },
                { id: 7, url:  require('../../static/img/7.jpg') },
                { id: 8, url:  require('../../static/img/8.jpg') }
            ],//数据源
            showImgList: [],//要展示的下方的小图片列表
            bigId: '',     //展示的大图,值是图片的id
            bigImg: '',
            displayImgIndex: 0,  //当前展示的图片在小图列表中的下标。
            showImgLength: this.props.showImgLen || 5  //要展示的图片的个数（下方的小图）。默认是5个
        }
    }

    componentDidMount() {
        this.showBigImg(this.state.displayImgIndex);
        //初始化展示的小图个数。
        this.setState({
            showImgList: this.state.smallImgList.slice(0, this.state.showImgLength)
        })
    }

    //翻页操作
    turnPage(type) {
        var index;
        var len = this.state.smallImgList.length;
        if (type == 'nextPage') {

            index = this.state.displayImgIndex + 1 > len - 1 ? 0 : this.state.displayImgIndex + 1;//判断最后一页，调到第一页

        } else {

            index = this.state.displayImgIndex - 1 < 0 ? len - 1 : this.state.displayImgIndex - 1;//判断第一页调到最后一页

        }

        if (index == len - 1 && type == 'prevPage') {
            let leftImg = index % this.state.showImgLength + 1;
            this.setState({
                showImgList: this.state.smallImgList.slice(-leftImg)
            })
        }
        else if (index % this.state.showImgLength == 0 && type == 'nextPage') {
            this.setState({
                showImgList: this.state.smallImgList.slice(index, index + this.state.showImgLength)
            })
        } else if (index % this.state.showImgLength == 4 && type == 'prevPage') {
            this.setState({
                showImgList: this.state.smallImgList.slice(index + 1 - this.state.showImgLength, index + 1)
            })
        }

        this.setState({ displayImgIndex: index }, (prevState, prop) => {

            this.showBigImg(this.state.displayImgIndex)

        })
    }

    showBigImg(index) {
        var imgindex = this.state.smallImgList[index]
        this.setState({
            bigId: imgindex.id,
            bigImg: imgindex.url
        })
    }

    render() {
        console.log(this.state.showImgList);
        var bigId = this.state.bigId;
        return (
            <div className='broadcast'>
                <Header />
                <div className="bigshowcontainer">
                    <img src={this.state.bigImg} />
                </div>

                <div className="smallimglist">
                    <div className="left" onClick={this.turnPage.bind(this, 'prevPage')}>prevPage</div>
                    <ul>
                        {
                            this.state.showImgList.map((item, index) => {
                                return (
                                    bigId == item.id ? <li className="border" key={item.id}><img src={item.url} /></li> : <li key={item.id}><img src={item.url} /></li>

                                )
                            })
                        }
                    </ul>
                    <div className="right" onClick={this.turnPage.bind(this, 'nextPage')}>nextPage</div>
                </div>
            </div>
        )
    }
}

export default Broadcast
