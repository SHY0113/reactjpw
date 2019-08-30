import React, { Component } from 'react'
import Headers from "../../header"
import Empty from "../../empty"

export default class Address extends Component {
    render() {
        return (
            <div>
                <Headers title="收货地址" titleR="" />
                <Empty imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/empty_icons/user_address.png?a98391eb-1&sv=449ce9ee" likes="还没有收货地址哦" modes="添加地址" />
               
            </div>
        )
    }
}
