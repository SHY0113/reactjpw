import React, { Component } from 'react'
import Header from "@components/header"
import Empty from "@components/empty"
import {select_order_api} from "@api/mine"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect';
import {ReceivedWrapper} from "./styled"
 class Order extends Component {
    render() {
        let {reorder} = this.props
        return (
            <ReceivedWrapper>
                <Header title="待收货订单" />
                {
                    reorder.length?
                    <ul>
                        {
                            reorder.map((item,index)=>(
                               <li key={index}>
                                    <div className="orderImg">
                                        <img src={item.goodsImg} />
                                    </div>
                                    <div className="orderR">
                                        <h3>{item.goodsName}</h3>
                                        <div className="nowPrice">￥{item.nowPrice}</div>
                                        <div className="goodsNum">X{item.goodsNum}</div>
                                        <div className="finsh">实付<span>￥{item.nowPrice*item.goodsNum}</span></div>
                                    </div>
                                    <div className="confirm" onClick={this.props.handleClickfirm.bind(this,item.goodsName,item.goodsNum,item.oldPrice,item.nowPrice,item.goodsImg,item.goodsColor,item.goodsType,item.goodsconId,item.status="已收货",item._id)}>
                                        确认收货
                                    </div>
                               </li> 
                            ))
                        }
                    </ul>:<Empty imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-order.png?598b3089-1&sv=449ce9ee"  likes="暂无订单" mores="今日推荐" />
                }
                
            </ReceivedWrapper>
        )
    }
    async componentDidMount(){
        this.props.handleGetOrders()
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order)