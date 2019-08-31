import React, {Component} from 'react'
import {Homes} from "./styled"
import {NavLink} from "react-router-dom"
import {getIndexNavSkip} from "@api/home/index"
import Special from "@components/special"
import Commodity from "@components/commodity"
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css";
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            list : [],
            number:true,
            navskip:[],
            piclist:[],
        }
    }
    render() {
        let {navskip,piclist} = this.state;
        return (
            <Homes>
                <div className="tabls">
                    <div className="headers">
                        <NavLink to={"/seek"} className="seek">
                            <i className="iconfont">&#xe60b;</i>
                            <div className="did">
                                <img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png"/>
                            </div>
                            <span>搜索</span>
                        </NavLink>
                        <NavLink to={"/seek"} className="jktfkc">
                            <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png"
                                 alt=""/>
                        </NavLink>
                    </div>
                    <div className="lunbo">
                        <div className="swiper-container">
                            <div className="swiper-wrapper" >
                                {
                                    piclist.map((item,index)=>(
                                            <div className="swiper-slide" key={index}><img src={item.pic} alt=""/></div>
                                    ))
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="irbamj">
                        <NavLink className="purchase" to={"/purchase"}>
                            <img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                        </NavLink>
                        <NavLink className="purchase" to={"/seckill"}>
                            <img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                        </NavLink>
                        <NavLink className="purchase" to={"/promotion"}>
                            <img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                        </NavLink>
                        <NavLink className="purchase" to={"/life"}>
                            <img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                        </NavLink>

                    </div>
                    <div className="seckill">
                        <NavLink to={"/seckill"} className="onseck">
                            <img src="https://s2.juancdn.com/jas/190826/0/4/5d63378733b08935ab4f6cab_540x656.gif"
                                 alt=""/>
                        </NavLink>
                        <div className="clearance">
                            <NavLink to={"/promotion"} className="clearanceName">
                                <img
                                    src="https://goods6.juancdn.com/jas/190823/a/b/5d5f427d33b0896e6a33ab1f_540x328.png?imageMogr2/quality/85!/format/png"
                                    alt=""/>
                            </NavLink>
                            <NavLink to={"/life"} className="clearanceName">
                                <img
                                    src="https://goods3.juancdn.com/jas/190823/5/2/5d5f435533b0896a4b24c711_540x328.png?iopcmd=convert&Q=85&dst=png"
                                    alt=""/>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to={"/fur"} className="gipzik">
                        <img src="https://s2.juancdn.com/jas/190822/1/5/5d5e4cd1b6f8ea09ce5ef5e7_1080x300.gif" alt=""/>
                    </NavLink>
                    <div className="eqwgtt">
                        <img
                            src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png"
                            alt=""/>
                    </div>
                    <div className="bQiGsQ">
                        <ul>
                            <li className={this.state.number ? "qq" : ""} onClick={this.numberTrue.bind(this)}>精选专场</li>
                            <li className={this.state.number ? "" : "qq"} onClick={this.numberFalse.bind(this)}>精选商品</li>
                        </ul>
                    </div>
                    <div className="godos">
                        {this.state.number ? <Special/> : <Commodity/>}
                    </div>
                </div>
            </Homes>
        )
    }
    numberTrue(){
        // this.setState(this.state.number)
        // this.state.number = true;
        this.setState({
            number:true
        })
    }
    numberFalse(){
        this.setState({
            number:false
        })
    }
    async componentDidMount(){
        let getIndexnavSkip = await getIndexNavSkip()
        this.setState({
            navskip : getIndexnavSkip.adsRes.block[0].multi_block[0].data,
            piclist : getIndexnavSkip.adsRes.slide_ads.config.slide
        })
        var mySwiper = new Swiper ('.swiper-container', {
            direction:'horizontal',
            loop: true,
            speed:1000,
            observer:true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            autoplayDisableOnInteraction : false,
        });
    }

}
