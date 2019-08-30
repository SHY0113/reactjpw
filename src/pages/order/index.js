import React, { Component } from 'react'
import Header from "@components/header"
import Empty from "@components/empty"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect';
import {OrderWrapper} from "./styled"
class Orders extends Component {
    render() {
        let {allorder} = this.props
        return (
            <OrderWrapper>
                <Header title="全部订单" />
                {
                    allorder.length ?<ul>
                    {
                        allorder.map((item,index)=>(
                           <li key={index}>
                                <div className="orderImg">
                                    <img src={item.goodsImg} />
                                </div>
                                <div className="orderR">
                                    <h3>{item.goodsName}</h3>
                                    <div className="nowPrice">￥{item.nowPrice}</div>
                                    <div className="goodsNum">X{item.goodsNum}</div>
                                    <div className="finsh">实付<span>￥{item.nowPrice*item.goodsNum}</span></div>
                                    <div className="confirm" >
                                    {item.status}
                                </div>
                                </div>
                                
                           </li> 
                        ))
                    }
                </ul>
            :<Empty imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-order.png?598b3089-1&sv=449ce9ee"  likes="暂无订单" mores="今日推荐" />
                }
               
            </OrderWrapper>
        )
    }
    async componentDidMount(){
        this.props.handleGetOrders()
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders)