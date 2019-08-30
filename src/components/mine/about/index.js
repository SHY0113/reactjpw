import React, { Component } from 'react'
import {AboutWrapper} from "./styled"
import Header from "@components/header"
export default class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <Header title="关于" />
                <div className="banner1"><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/banner_1.jpg?fd84daec-1&sv=449ce9ee" /></div>
                <div className="banner2"><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/banner_2.jpg?31b47d1e-1&sv=449ce9ee" /></div>
                <div className="banner3"><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/box_1.jpg" /></div>
                <div className="banner4"><video src="https://jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/about_jp.mp4" controls loop></video></div>
                <div className="about-second list">
                    <h3 className="aboutText"><i className="before"></i> 平价好物，真正实惠 <i className="after"></i></h3>
                    <div className="about_txt">
                        <p>
                            卷皮聚焦平价生活类目，精选优质商家和商品。商品价格亲民、品质优良、贴近日常生活。让用户在每一次购物中，都能真正享受好物低价。
                                </p>
                    </div>
                    <div className="about_img">
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/img_1.jpg?55e3766d-1&amp;sv=449ce9ee" />
                    </div>
                </div>
                <div className="about-second list">
                    <h3 className="aboutText"><i className="before"></i> 买手精选，人工质检 <i className="after"></i></h3>
                    <div className="about_txt">
                        <p>
                            百人的买手团队精挑细选，用专业的眼光筛选出更优品质、更具性价比的商品。商品需先邮寄样品入库，职业验货师进行严格审核，确保品质，让用户简单买到心仪好物。
                                </p>
                    </div>
                    <div className="about_img">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/img_2.jpg?de70a8ff-1&amp;sv=449ce9ee" />
                    </div>
                </div>
                <div className="about-second list">
                    <h3 className="aboutText"><i className="before"></i> 特卖折扣，惊喜体验 <i className="after"></i></h3>
                    <div className="about_txt">
                        <p>卷皮采取特卖模式，每天10点和20点两次上新精选品牌，折扣好货限时限量，为用户打造惊喜的抢购乐趣。</p>
                    </div>
                    <div className="about_img">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/img_3.jpg?ff4fb486-1&amp;sv=449ce9ee" />
                    </div>
                </div>
                <div className="about-second list">
                    <h3 className="aboutText"><i className="before"></i> 金牌客服，贴心服务 <i className="after"></i></h3>
                    <div className="about_txt">
                        <p>百人的自有客服团队贴心守候，专业地解决用户的每一个问题。用真诚笑容，全方位让用户购物无忧。</p>
                    </div>
                    <div className="about_img">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/img_4.jpg?9da4ae9e-1&amp;sv=449ce9ee" />
                    </div>
                </div>
                <div className="about-second list about-second-end">
                    <h3 className="aboutText"><i className="before"></i> 生活仓库，卷皮直发 <i className="after"></i></h3>
                    <div className="about_txt">
                        <p>优质工厂直供，去除中间环节，以实惠平价供应品质生活。自营仓库直发，为用户提供更快的物流配送和更好的消费服务。</p>
                    </div>
                    <div className="about_img">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/about_jp/img_5.jpg?45278105-1&amp;sv=449ce9ee" />
                    </div>
                </div>
            </AboutWrapper>
        )
    }
}
