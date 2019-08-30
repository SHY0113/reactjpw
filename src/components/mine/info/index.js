import React, { Component } from 'react'
import Header from "@components/header"
import {InfoWrapper} from "./styled"
export default class Info extends Component {
    render() {
        return (
            <InfoWrapper>
                <Header title="我的账户" />
                <div className="info">
                    <div className="infoInfo infoLogo">
                        <span>头像</span>
                        <div className="logoImg">
                            <img
                                src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg" />
                        </div>
                    </div>
                    <div className="infoInfo">
                        <span>用户名</span>
                        <p>jp_39666aba5</p>
                    </div>
                    <div className="infoInfo infoAddress">
                        收货地址
            </div>

                    <div className="infoPhone infoInfo">
                        <span>
                            绑定手机号码
                </span>
                        <p>183******66</p>
                    </div>
                </div>
            </InfoWrapper>
        )
    }
}
