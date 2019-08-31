import React, {Component} from 'react';
import {Furse} from "./styled"
import {NavLink} from "react-router-dom"
import {getBrandGoods} from "@api/home"

class Fur extends Component {
    constructor() {
        super();
        this.state = {
            brandgood: [],
            isloading: false,
            storeInfo: [],
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    render() {
        if (this.state.isloading) {
            let {brandgood, storeInfo} = this.state;
            console.log(storeInfo)
            return (
                <Furse>
                     <div className="hedder">
                        <NavLink to={"/home"} className="iconfont">&#xe6a5;</NavLink>
                        <p>姣雅皮草大会</p>
                        <i className="iconfont">&#xe62a;</i>
                    </div>
                    <div className="jokmto">

                        <div className="cQHFIx">
                            <div className="fAbHwE">

                                <div className="haSPZA">
                                    {/* <img className="sc-jKJlTe fybUyr"
                                         src={storeInfo.logo}/> */}
                                </div>

                                <div className="iuwpVa">
                                    {/* <p className="sc-hMqMXs ggRoE">{storeInfo.title}</p> */}
                                    <p className="sc-kEYyzF jpfFsg">共113件商品</p>
                                </div>

                                <div className="jmbXZH">

                                </div>
                            </div>
                            <div className="lmnFtO">
                                <div className="daJzJm">
                                    <span>￥</span>
                                    <span>20</span>
                                </div>
                                <div className="jxmGSK">
                                    <span>满20元可用</span>
                                    <span>仅限当前专场使用</span>
                                </div>
                                <div className="hyVErz">
                                    <span>抢光了</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bqGekT">
                        <p>距离结束还剩</p>
                        <span>{this.state.day}天 {this.state.hour}时{this.state.minute}分{this.state.second}秒</span>
                    </div>
                    <div className="hQoDnQ">
                        <div className="hqoDns">
                            {/* {
                                brandgood.map((item, index) => (
                                    <div key={index}>{item[0].tabname}</div>
                                ))
                            } */}
                        </div>

                    </div>
                    <div className="list-over">
                        {/* {
                            brandgood.map((item, index) => (
                                <div key={index}>
                                    <div className="duNiVz">
                                        <span> - {item[0].tabname} - </span>
                                    </div>
                                    <div className="Nav-goods">
                                        <div className="goods_nav">
                                            {
                                                item.map((ince, index) => (
                                                    ince.goods_id ?
                                                        <div className="goods-list" key={index}>
                                                            <img className="sc-iQKALj fIOCtV"
                                                                 src={ince.pic_url}/>
                                                            <div className="sc-bwCtUz dQSbPX">
                                                                <span className="sc-eTuwsz eDzHVz">¥{ince.cprice}</span>
                                                                <span className="sc-gwVKww kBfwjF">¥{ince.oprice}</span>
                                                            </div>
                                                            <div className="sc-bsbRJL cAntPj">{ince.title}</div>
                                                       </div> : ''


                                               ))
                                           }

                                       </div>
                                    </div>
                                </div>
                           ))
                       } */}
                    </div>
                </Furse>
            );
        } else {
            return (
                <div></div>
            )
        }
    }

    async componentDidMount() {
        let getBrandgood = await getBrandGoods();
        this.setState({
            brandgood: getBrandgood.floor_data,
            storeInfo: getBrandgood.storeInfo,
            isloading: true,
        })
        console.log(getBrandgood)
        const end = Date.parse(new Date('2019-09-01 24:00'))
        this.countFun(end);

    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    countFun = (end) => {
        let now_time = Date.parse(new Date());
        var remaining = end - now_time;
        this.timer = setInterval(() => {
            //防止出现负数
            if (remaining > 1000) {
                remaining -= 1000;
                let day = Math.floor((remaining / 1000 / 3600) / 24);
                let hour = Math.floor((remaining / 1000 / 3600) % 24);
                let minute = Math.floor((remaining / 1000 / 60) % 60);
                let second = Math.floor(remaining / 1000 % 60);
                this.setState({
                    day: day,
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);
    }
}

export default Fur;