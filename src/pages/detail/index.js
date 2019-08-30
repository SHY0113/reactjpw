import React, { Component } from 'react'
import { Detailsapi } from "@api/list"
import { Detailss, Bottombar, Selection } from "./styled"
import Loading from "@common/loading"
import { Link } from "react-router-dom";
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isloading: false,
            show: false
        }
    }
    render() {
        if (this.state.isloading) {
            let dataildata = this.state.data.skudata;
            //轮播图需要的图片并去重
            let swiperdata = dataildata.sku.map((item, index) => (
                item.av_origin_zpic
            ))
            let swiperdatas = [...new Set(swiperdata)]
            //需要的型号并去重
            let type = dataildata.sku.map((item, index) => (
                item.av_zvalue
            ))
            let types = [...new Set(type)]
            //需要的尺寸并去重
            let size = dataildata.sku.map((item, index) => (
                item.av_fvalue
            ))
            let sizes = [...new Set(size)]
            console.log(dataildata)
            return (
                <Detailss>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <img className="swiper-slide" src={dataildata.info.goods_origin_url} alt="" />
                            {
                                swiperdatas.map((item, index) => (
                                    <img key={index} className="swiper-slide" src={item} alt="" />
                                ))
                            }

                        </div>
                    </div>
                    <section>
                        <div>
                            <div className="divp">
                                <div>
                                    <span className="spans1">
                                        <span className="spans2">
                                            <span className="spans3">¥</span>
                                            {dataildata.info.cprice}
                                        </span>
                                        <del>{dataildata.info.oprice}</del>
                                    </span>
                                    <span className="spans4">包邮</span>
                                </div>
                                <span>{dataildata.info.join_number}</span>
                            </div>
                            <div className="divc" >
                                <p>{dataildata.info.goods_title}</p>
                            </div>
                        </div>
                    </section>
                    <div className="promise">
                        <p>
                            <span className="same">
                                24小时发货
                        </span>
                            <span className="same">
                                7天包退
                        </span>
                            <span className="same">
                                售后补贴
                        </span>
                        </p>
                    </div>
                    <div className="selects">
                        <div onClick={this.changeShow.bind(this)}>
                            <p>已选择： 黑色 均码</p>
                            <img src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" alt="" />
                        </div>
                    </div>
                    <Bottombar>
                    <Link to="/home">
                        <div className="homebar bar">
                            <img src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" alt="" />      <span>
                               
                                    首页
                                
                            </span>
                        </div>
                        </Link>
                        <Link to="/shopcar">
                        <div className="carbar bar">
                            <img src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" alt="" />
                            <span>
                                
                                    购物车
                            
                            </span>
                        </div>
                        </Link>
                        <div className="buybar">
                            <div className="buynow" onClick={this.changeShow.bind(this)}>
                                <p>立即购买</p>
                            </div>
                            <div className="addcar" onClick={this.changeShow.bind(this)}>
                                <p>加入购物车</p>
                            </div>
                        </div>
                    </Bottombar>
                    <Selection style={this.changeDisplay()}>
                        <div className="top">
                            <div className="topleft"><img src="https://goods3.juancdn.com/goods/190625/5/f/5d11d6e333b08953a401b4d4_800x800.jpg?iopcmd=thumbnail&amp;type=11&amp;height=200&amp;width=200%7Ciopcmd=convert&amp;Q=80&amp;dst=jpg" /></div>
                            <div className="topright">
                                <div className="price">￥65</div>
                                <div className="please">请选择颜色尺码</div>
                            </div>
                        </div>
                        <img className="close" onClick={this.handleFalse.bind(this)} src="https://web.juanpi.com/static/media/del.bbe4aea1.png" alt="" />
                        <span>{dataildata.info.zav_name}：</span>
                        <div className="large">
                            {
                                types.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))
                            }
                        </div>
                        <span>{dataildata.info.fav_name}：</span>
                        <div className="large">
                            {
                                sizes.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))
                            }
                        </div>
                        <div className="adddel">
                            <span>购买数量</span>
                            <div className="adnum">
                                <span className="del">-</span>
                                <span className="num">1</span>
                                <span className="del">+</span>
                            </div>
                        </div>

                        <div className="button">确定</div>
                    </Selection>
                </Detailss>
            )
        } else {
            return (
                <Loading />
            )
        }
    }

    async componentDidMount() {
        let ids = this.props.match.params.ids;
        let datas = await Detailsapi(ids, ids);

        // 更新视图
        this.setState({
            data: datas,
            isloading: true
        })
        //轮播图
        let mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            observer: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            autoplayDisableOnInteraction: false,
        });

    }
    changeShow() {
        this.setState({
            show: true
        }

        )

    }
    changeDisplay() {
        let styleObj;
        if (this.state.show == true) {
            styleObj = { display: 'block' };
        } else {
            styleObj = { display: 'none' };
        }
        return styleObj;
    }
    handleFalse() {
        this.setState({
            show: false
        })
    }
}
