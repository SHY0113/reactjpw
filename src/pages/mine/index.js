import React, { Component } from 'react'
import Headers from "@components/header"
import { MineWrapper } from "./styled"
import {getCookie} from "@static/cookie.js"
export default class Mine extends Component {
    render() {
        let token = getCookie('token')
        return (
            <MineWrapper>
                {
                    token ?
                    <div className="mine_headTo" ref='mine_headTo'>
                    <Headers title="个人中心" titleR="退出" />
                    <div className="mine_headInfo" onClick={this.handleInfo.bind(this)}>
                        <div className="infoImg">
                            <img
                                src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg" />
                        </div>
                        <div className="infoR">
                            <div className="infoName">jp_39666aba5</div>
                            <div className="mineInfo">
                                <span>我的账户</span>
                                <i className="iconfont">&#xe643;</i>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="mine_head">
                    <Headers title="个人中心" titleR="" />
                    <div className="mine_headRL">
                        <span onClick={this.handleReg.bind(this)}>注册</span>
                        <span>|</span>
                        <span onClick={this.handleLogin.bind(this)}>登录</span>
                    </div>
                </div>
                }
                

                
                <div className="mine_order" onClick={this.handleOrder.bind(this)}>
                    <span className="my_oreder">我的订单</span><span className="all_order">全部订单</span>
                </div>
                <div className="mine_tab">
                    <div className="mine_tablist" onClick={this.handleNoPay.bind(this)}>
                        <i className="iconfont">&#xe612;</i>
                        <span>待付款</span>
                    </div>
                    <div className="mine_tablist" onClick={this.handleNoGroups.bind(this)}>
                        <i className="iconfont">&#xe604;</i>
                        <span>待成团</span>
                    </div>
                    <div className="mine_tablist" onClick={this.handleNoReceive.bind(this)}>
                        <i className="iconfont">&#xe69e;</i>
                        <span>待收货</span>
                    </div>
                    <div className="mine_tablist" onClick={this.handleRefund.bind(this)}>
                        <i className="iconfont">&#xe631;</i>
                        <span>退款/售后</span>
                    </div>
                </div>

                <div className="mine_con">
                    <div onClick={this.handleQuan.bind(this)}>我的优惠券</div>
                    <div onClick={this.handleCollection.bind(this)}>我的收藏</div>
                    <div onClick={this.handleTuan.bind(this)}>我的拼团</div>
                    <div onClick={this.handleFree.bind(this)}>
                        <span>我的免单券</span>
                        <p>0张</p>
                    </div>

                    <div onClick={this.handleBalance.bind(this)}>
                        <span>余额</span>
                        <p>0.00元</p>
                    </div>
                </div>

                <div className="mine_bottom">
                    <div onClick={this.handleService.bind(this)}>客服中心</div>
                    <div onClick={this.handleAbout.bind(this)}>关于卷皮</div>
                </div>
            </MineWrapper>
        )
    }
    handleReg() {
        //注册
        this.props.history.push({ pathname: "/register" })
    }
    handleLogin() {
        //登录
        this.props.history.push({ pathname: "/login" })
    }
    handleOrder() {
        //我的订单
        this.props.history.push({pathname:"/order"})
    }
    handleNoPay(){
        //未付款
        this.props.history.push({pathname:"/nopay"})
    }
    handleNoGroups(){
        //待成团
        this.props.history.push({pathname:"/nogroup"})
    }
    handleNoReceive(){
        //待收货
        this.props.history.push({pathname:"/noreceive"})
    }
    handleRefund(){
        //退款/售后
        this.props.history.push({pathname:"/refund"})
    }
    handleQuan(){
        //我的优惠券
        this.props.history.push({pathname:"/quan"})
    }
    handleCollection(){
        //我的收藏
        this.props.history.push({pathname:"/collection"})
    }
    handleTuan(){
        //我的拼团
        this.props.history.push({pathname:"/tuan"})
    }
    handleFree(){
        //我的免单券
        this.props.history.push({pathname:"/free"})
    }
    handleBalance(){
        //我的余额
        this.props.history.push({pathname:"/balance"})
    }
    handleService(){
        //客服中心
        this.props.history.push({pathname:"/server"})
    }
    handleAbout(){
        //关于卷皮
        this.props.history.push({pathname:"/about"})
    }
    handleInfo(){
        //个人信息
        this.props.history.push({pathname:"/info"})
    }
    
}
