
import React, { Component } from 'react'
import Header from "@components/header"
import Empty from "@components/empty"
export default class Tuan extends Component {
    render() {
        return (
            <div>
                <Header title="拼团活动" />
                <Empty imgs="https://tuan.juancdn.com/build/img/no_buynew.png"  likes="开团购买可享更多优惠" mores="去开团" />
            </div>
        )
    }
}
