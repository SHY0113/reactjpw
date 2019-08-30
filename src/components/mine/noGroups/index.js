import React, { Component } from 'react'
import Header from "@components/header"
import Empty from "@components/empty"
export default class NoGroups extends Component {
    render() {
        return (
            <div>
                <Header title="待成团订单" />
                <Empty imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-order.png?598b3089-1&sv=449ce9ee"  likes="暂无订单" mores="今日推荐" />
            </div>
        )
    }
}
