import React, { Component } from 'react'
import { CollectWrapper } from "./styled"
import Empty from "@components/empty"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"

class Collection extends Component {
    render() {
        let { collect ,indexNum} = this.props
       
        return (
            <CollectWrapper>
                {
                    collect.length ?
                    <div className="collectC">

                    
                        <div className="collectC collectBOX1" ref="box">
                            <div className="header">
                            <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6a5;</i>
                                <div className="header_c">我的收藏</div>
                                <div className="header_r" onClick={this.hanleUpdateShopcar.bind(this)}>编辑</div>
                            </div>
                            <div className="collectCon">
                                <ul>
                                    {
                                        collect.map((item, index) => (
                                            <li key={index}>
                                               
                                                <div className="collectImg">
                                                    <img src={item.goodsImg} />
                                                </div>
                                                <div className="collectR">
                                                    <h3>{item.goodsName}</h3>
                                                    <div className="price">
                                                        <div className="nowPrice">￥{item.nowPrice}</div>
                                                        <div className="oldPrice">￥{item.oldPrice}</div>
                                                    </div>

                                                    <div className="gshopcar">
                                                        加入购物车
                                    </div>
                                                </div>

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div> 
                        <div className="collectC collectBOX2" ref="box2">
                        <div className="header">
                        <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6a5;</i>
                            <div className="header_c">我的收藏</div>
                            <div className="header_r" onClick={this.hanlefinshShopcar.bind(this)} >取消</div>
                        </div>
                        <div className="collectCon">
                            <ul>
                                {
                                    collect.map((item, index) => (
                                        <li key={index}>
                                            <input type="checkbox"onChange={this.props.handleChangeClick.bind(this,index)} checked={item.flag} />
                                            <div className="collectImg">
                                                <img src={item.goodsImg} />
                                            </div>
                                            <div className="collectR">
                                                <h3>{item.goodsName}</h3>
                                                <div className="price">
                                                    <div className="nowPrice">￥{item.nowPrice}</div>
                                                    <div className="oldPrice">￥{item.oldPrice}</div>
                                                </div>
                                            </div>

                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="collectBot">
                                <div className="num">
                                    已选择<span>{indexNum}</span>件商品
                                </div>
                                <div className="collectDel" onClick={this.props.handleDelCollect.bind(this)}>删除</div>
                            </div>
                        </div>
                    </div>
                    </div>
                        
                        : <div className="collectC">
                            <div className="header">
                            <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6a5;</i>
                                <div className="header_c">我的收藏</div>
                                <div className="header_r" >编辑</div>
                            </div>
                            <Empty imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/empty_icons/user_fav.png?932988a3-1&sv=449ce9ee" likes="看到喜欢的商品就收藏吧" mores="今日推荐" />
                        </div>
                }


            </CollectWrapper>
        )
    }
    async componentDidMount() {
        //let data = await select_collect_api()
        this.props.handleGetCollection()
    }
    hanleUpdateShopcar() {
        this.refs.box.style.display = "none"
        this.refs.box2.style.display = "block"
    }
    hanlefinshShopcar(){
        this.refs.box.style.display = "block"
        this.refs.box2.style.display = "none"
    }
    handleBack(){
        
        this.props.history.goBack()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)