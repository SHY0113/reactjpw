import React, {Component} from 'react';
import {Seckill} from "./styled"
import {NavLink} from "react-router-dom"
import {timebuy,getTable} from "@api/home"
import Swiper from "swiper"

class Ms extends Component {
    constructor() {
        super();
        let fixDate = (new Date()).setHours(15, 0, 0); // for 3:00:00 pm
        let currDate = new Date();
        this.state = {
            timeb: [],
            fixDate,
            diff: fixDate - currDate,
            gettable:[]
        }
    }

    render() {
        const {diff} = this.state;
        const hours = Math.floor(diff / (60 * 60 * 1000));
        const mins = Math.floor((diff - (hours * 60 * 60 * 1000)) / (60 * 1000));
        const secs = Math.floor((diff - (hours * 60 * 60 * 1000) - (mins * 60 * 1000)) / 1000);
        let {timeb,gettable} = this.state;
        return (
            <Seckill>
                <div className="time_tabs">
                    <div>
                        <p>20:00</p>
                        <p>已开抢</p>
                    </div>
                    <div>
                        <p>10:00</p>
                        <p>已开抢</p>
                    </div>
                    <div>
                        <p>14:00</p>
                        <p>抢购中</p>
                    </div>
                    <div>
                        <p>20:00</p>
                        <p>即将开抢</p>
                    </div>
                    <div>
                        <p>10:00</p>
                        <p>即将开抢</p>
                    </div>
                    <span></span>
                </div>
                <div className="residue">
                    - 离本场结束仅剩{hours}时{mins}分{secs}秒 -
                </div>
                <div className="outo">
                    <div className="goods-list">
                        {
                            timeb.map((item,index) => (
                                <div className="lists" key={index}>
                                    <div className="img_box">
                                        <img className="lazy loaded"
                                             src={item.pic_url}/>
                                    </div>
                                    <div className="img_box_info">
                                        <p className="">{item.title_long}</p>
                                        <p className="goods_price ">
                                            <span>限量价:</span>
                                            <span>￥</span>
                                            <span>{item.cprice}</span>
                                            <span>￥{item.oprice}</span>
                                        </p>
                                        <p className="progress">
                                            <span></span>
                                            <span>已抢12%</span>
                                        </p>
                                        <span className="buy_btn">{item.mkt_text}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="fotter" >
                    <div>
                        {/*https://goods6.juancdn.com/bao/180228/a/7/5a96132fa9fcf83c1262f480_150x150.png*/}
                        <img src="https://goods5.juancdn.com/bao/180228/9/8/5a96130e8150a14cc160d303_150x150.png" alt=""/>
                    </div>
                    <div>
                        {/*https://goods6.juancdn.com/bao/180228/a/0/5a96136aa9fcf83bf17cbdbf_150x150.png*/}
                        <img src="https://goods6.juancdn.com/bao/180228/a/0/5a96134fa9fcf83b79185730_150x150.png" alt=""/>
                    </div>
                </div>
            </Seckill>
        );
    }

    async componentDidMount() {
        let timebuys = await timebuy();
        let a = await getTable();
        this.setState({
            timeb: timebuys.data.time_tabs[4].goodslist,
            gettable : a.data.menulist
        })
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            centeredSlides: true,
        })
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState, props) => ({
            diff: prevState.fixDate - (new Date()).getTime(),
        }));
    }

}

export default Ms;