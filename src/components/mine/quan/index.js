import React, { Component } from 'react'
import Header from "@components/header"
import Empty from "@components/empty"
export default class Quan extends Component {
    render() {
        return (
            <div>
                <Header title="我的优惠券" />
                <Empty imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/empty_icons/user_coupon.png?529205e5-1&sv=449ce9ee"  likes="领券小贴士" mores="去看看" />
            </div>
        )
    }
}