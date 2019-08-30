import React, { Component } from 'react'
import Headers from "@components/header"
import {LoginWrapper} from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapState"
class Login extends Component {
    render() {
        let {username,password} = this.props
        return (
            <LoginWrapper>
                <Headers title="登录" titleR="注册" />
                <div className="logincon">
                    <input type="text" placeholder="请输入手机号" value={username} onChange={this.props.handleLoginChange.bind(this,1)}/>
                    <input type="text" placeholder="请填写密码" value={password} onChange={this.props.handleLoginChange.bind(this,2)}/>
                    <button className="loginBtn"  onClick={this.props.handleLogin.bind(this,username,password)}>
                        登录
                    </button>
                </div>

            </LoginWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)