import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import {withRouter} from 'react-router-dom'
class Headers extends Component {
    render() {
        let {title,titleR} = this.props
        return (
            <HeaderWrapper>
                <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6a5;</i>
                
                <span>{title}</span>
                <p>{titleR}</p>
            </HeaderWrapper>
        )
    }
    handleBack(){
        
        this.props.history.goBack()
    }
}

Headers.defaultProps = {
    title:'我的',
    titleR:''
}

export default withRouter(Headers);