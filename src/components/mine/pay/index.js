import React, { Component } from 'react'
import { PayWrapper } from "./styled"
// import {OrderDetail} from "./timer.js"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import Header from "@components/header"
import {select_orderid_api} from "@api/mine"
class Pay extends Component {
    constructor(){
        super()
        this.state = {
            orderid:[]
        }
    }
    render() {
        let orders = this.state.orderid
        let price = orders.goodsNum*orders.nowPrice
        return (
            
            <PayWrapper>
                {
                    orders?<div>
                    <Header title="订单确认" />
                    <div className="orderCon">
                        <div className="orderImg">
                            <img src={orders.goodsImg} />
                        </div>
                        <div className="orderR">
                            <h3>{orders.goodsName}</h3>
                            <div className="type">
                                <div className="orderColor">{orders.goodsColor}</div>
                                <div className="orderType">{orders.goodsType}</div>
                            </div>
                            <div className="nowPrice">￥{orders.nowPrice}</div>
                            <div className="num">X{orders.goodsNum}</div>
                        </div>
                        
                    </div>
                    <div className="allPrice">
                            <span>商品总额</span>
                            <span>￥{price}</span>
                        </div>
                    <div className="paybot">
                        <div className="pay">应付金额 <span>￥{price}</span> </div>
                        <div className="cancel" onClick={this.handleCancel.bind(this)}>取消</div>
                        <div className="paynow"onClick={this.props.handleFinshOrder.bind(this,orders.goodsName,orders.goodsNum,orders.oldPrice,orders.nowPrice,orders.goodsImg,orders.goodsColor,orders.goodsType,orders.goodsconId,orders.status="待收货",orders._id)}>去付款</div>
                    </div>
                    </div> : ''
                }
                
               
            </PayWrapper>
        )
    }
    async componentDidMount(){
        let id =  this.props.location.pathname.split('/')[2]
        let data = await select_orderid_api(id)
        let list = data.data.list[0]
        this.setState({
            orderid:list
        })
    }
    handleCancel(){
        this.props.history.push("/nopay")
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pay)