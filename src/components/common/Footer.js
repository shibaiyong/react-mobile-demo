import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerContent: 'This is Footer'
        }
    }

    render() {
        return (
            <div className='footer'>
                {/* <Link to='/mine'>Mine</Link> */}
            </div>
        )
    }
}

export default Footer