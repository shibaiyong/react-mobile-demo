import React from 'react'

class PageCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showButtonNum: 7,
            pageNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            currentPage: 4
        }
    }
    componentWillReceiveProps(nextprops) {
        //在这里根据父组件传过来的props更新状态，不会触发额外得render。但是在第一次渲染的时候不执行。这也是他跟willmount的区别。
        
    }
    componentWillMount() {
        
        //在这里根据父组件传过来的props更新状态，不会触发额外得render.在componentWillReceiveProps中同样是安全的
        this.calculatePageNum();
        this.calculateCurrentPage();
    }
    componentDidMount() {
        
        //this.calculateCurrentPage();

    }
    //点击翻页按钮执行的逻辑
    turnPage(type, e) {
        e.preventDefault()
        let currentPage = this.state.currentPage
        let basePage = Math.floor(this.state.showButtonNum / 2)
        let startPage = (currentPage - 1) - basePage
        let endPage = currentPage + basePage
        if (type == 'next' && currentPage < this.state.pageNum.length) {
            this.setState({
                currentPage: ++this.state.currentPage
            })
        } else if (type == 'prev' && currentPage > 1) {
            this.setState({
                currentPage: --this.state.currentPage
            })
        }
    }
    //点击页数按钮
    clickPageButton(page, e) {
        e.preventDefault()
        this.setState({
            currentPage: page
        })
    }
    //输入页数前往逻辑
    //非受控组件应用实例
    handleInput() {
        //乘1时间，表单获取的字符串类型的数字，转成数值类型，否则显示异常。
        this.setState({
            currentPage: this.input.value * 1
        })
    }
    //计算页数
    calculatePageNum() {
        const { dataLength, eachPageShow } = this.props
        const pageNum = Math.ceil(dataLength / eachPageShow)
        var pageNumArr = []
        for (var i = 1; i <= pageNum; i++) {
            pageNumArr[i - 1] = i
        }
        this.setState({
            pageNum: pageNumArr
        })
    }
    //计算当前页
    calculateCurrentPage() {
        let button = this.props.showButtonNum || this.state.showButtonNum
        let currentPage = Math.ceil(button / 2)
        this.setState({
            currentPage: currentPage,
            showButtonNum: button
        })
    }
    //渲染要展示出来的按钮
    renderPageButton(idx) {
        
        let currentPage = idx || this.state.currentPage
        let allPage = this.state.pageNum.length
        let basePage = Math.floor(this.state.showButtonNum / 2)
        let startPage = (currentPage - 1) - basePage
        let endPage = currentPage + basePage
        if (startPage < 0) {
            endPage -= startPage
            startPage = 0
        }
        if (endPage > allPage) {
            startPage -= endPage - allPage
        }
        let renderPageNum = this.state.pageNum.slice(startPage, endPage)
        return renderPageNum.map((item) => {
            return (
                <li className={this.state.currentPage == item ? 'active' : ''} key={item}><a href="#" onClick={this.clickPageButton.bind(this, item)}>{item}</a></li>
            )
        })
    }
    render() {
    
        return (
            <div className="page-container">
                <div className="data-info">
                    <span>共</span><span>12</span><span>条</span>
                </div>
                <ul className="data-number">
                    <li><a href="#" onClick={this.turnPage.bind(this, 'prev')}>&#60;</a></li>
                    {this.renderPageButton()}
                    <li><a href="#" onClick={this.turnPage.bind(this, 'next')}>&#62;</a></li>
                </ul>
                <div className="goto-page">
                    <span>前往</span>
                    <input type="text" className="shi-input" ref={input => this.input = input} />
                    <a href="javascript:void(0)" onClick={this.handleInput.bind(this)}>确定</a>
                </div>
            </div>
        )
    }
}

export default PageCom