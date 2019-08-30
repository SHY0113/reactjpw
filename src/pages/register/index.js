import React, { Component } from 'react'
import Headers from "@components/header"
import { RegisterWrapper } from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapState"

class Register extends Component {
    render() {
        let {username,password} = this.props
        // console.log(list)
        return (
            <RegisterWrapper>
                <Headers title="注册" titleR="登录" />
                <div className="regcon">
                    <input type="text" placeholder="请输入手机号" value={username} onChange={this.props.handleChange.bind(this,1)}/>
                    <input type="password" placeholder="请填写密码" value={password} onChange={this.props.handleChange.bind(this,2)}/>
                    <button className="regBtn" onClick={this.props.handleRegister.bind(this,username,password)}>
                        注册
                    </button>
                </div>

            </RegisterWrapper>
        )
    }
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
