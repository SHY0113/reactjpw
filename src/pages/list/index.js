import React, { Component } from 'react'
import "./index.css"
import {Link} from "react-router-dom";
import fetchJsonp from 'fetch-jsonp';
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            isloading: false,
            data: [],
            activeIndex: 0
        }
    }
    
    render() {
        //解决第一次渲染时无数据而报错
        if (this.state.isloading === true) {
            let goodssort = this.state.data;
            let activeIndex = this.state.activeIndex
            let goodsicon = goodssort.map((item, index) => (
                item.secondCateList
            ))
            let goodsicon1 = goodsicon[activeIndex]
            return (
                <div className="maxList">
                    <Link to={"/search"}>
                    <div id="search-box">
                        
                            搜索商品
                       
                        
                    </div>
                    </Link>
                    <div className="leftList">
                        <ul>
                            {
                                goodssort.map((item, index) => (
                                    <li id={index===activeIndex?"activeLi" : ""} key={index} onClick={this.handleClick.bind(this, index)}>
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="rightList">
                        <div className="wrapper">
                            <div className="thirdWrap">

                                {
                                    goodsicon1.map((it, ind) => (
                                        <div className="child"  key={ind}>
                                            <Link to={'/category/'+it.id} className="bc">      
                                                <img src={"https://s2.juancdn.com" + it.icon} alt="" />      <span>{it.name}</span>                         
                                            </Link>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
    //获取jsonp数据
    async componentDidMount() {
        let datas = await fetchJsonp('https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1566876378731&')
            .then(res => res.json())
            .then(res => {
                return res;
            })
            // 更新视图
        this.setState({
            data: datas,
            isloading: true
        })
    }
    //获取点击的下标
    handleClick(index) {
        this.setState({
            activeIndex: index
        })
    }

}
