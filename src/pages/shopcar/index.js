import React, { Component, Fragment } from 'react'
import Headers from "@components/header"
import Emptys from "@components/empty"
import { ShopcarWrapper } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapState"
import { api } from "@api/mine"
// import { modify_shopcar_api } from "@api/mine";
class Shopcar extends Component {
    render() {
        let { selectedAll, goods, goodsNUM } = this.props
        let Num = 0, Price = 0;
        for (var i = 0; i < goods.length; i++) {
            if (goods[i].flag) {
                Num += goods[i].goodsNum;
                Price += goods[i].goodsNum * goods[i].nowPrice
            }
        }

        return (
            <ShopcarWrapper>
                <Fragment>
                    {
                        goods.length ?
                            <div className="shopcarbody">
                                <div className="shopcarbox" ref="shopcarbox">
                                    <div className="header">
                                        <div className="header_c">
                                            购物车
                        </div>
                                        <div className="header_r" onClick={this.hanleUpdateShopcar.bind(this)}>
                                            编辑
                        </div>
                                    </div>
                                    <div className="shopcar">
                                        <div className="shopcarCon">
                                            <ul>
                                                {
                                                    goods.map((item, index) => (
                                                        <li key={index}>
                                                            <input type="checkbox" checked={item.flag} onChange={this.props.handleGoodsSelect.bind(this, index)} />
                                                            <div className="goodsImg">
                                                                <img src={item.goodsImg} />
                                                            </div>
                                                            <div className="goodsR">
                                                                <div className="goodsTitle">{item.goodsName}</div>
                                                                <div className="goodsSku">
                                                                    <div className="goodsColor">{item.goodsColor}</div>
                                                                    <div className="goodsType">{item.goodsType}</div>
                                                                </div>
                                                                <div className="goodsPrice">
                                                                    <div className="nowPrice">￥{item.nowPrice}</div>
                                                                    <div className="oldPrice">￥{item.oldPrice}</div>
                                                                </div>
                                                                <div className="num">X{item.goodsNum}</div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>

                                        <div className="shocparbot">
                                            <input type="checkbox" checked={selectedAll} onChange={this.props.handleSelectedChange.bind(this)} />
                                            <div className="selectAll">全选</div>
                                            <div className="allPrice">
                                                合计
                                <span>￥{Price}</span>
                                            </div>
                                            <div className="pay" onClick={this.props.handleClickPay.bind(this)}>
                                                去结算({Num})
                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="shopcarbox2" ref="shopcarbox2" >

                                    <div className="header">
                                        <div className="header_c">
                                            购物车
                        </div>
                                        <div className="header_r" onClick={this.props.hanlefinshShopcar.bind(this)}>
                                            完成
                        </div>
                                    </div>
                                    <div className="shopcar">
                                        <div className="shopcarCon">
                                            <ul>
                                                {
                                                    goods.map((item, index) => (
                                                        <li key={index}>
                                                            <input type="checkbox" checked={item.flag} onChange={this.props.handleGoodsSelect.bind(this, index)} />
                                                            <div className="goodsImg">
                                                                <img src={item.goodsImg} />
                                                            </div>
                                                            <div className="goodsR" >
                                                                <div className="goodsTitle">{item.goodsName}</div>
                                                                <div className="goodsSkuChange">
                                                                    <div className="goodsColor">{item.goodsColor}</div>
                                                                    <div className="goodsType">{item.goodsType}</div>
                                                                    <i className="iconfont">&#xe63c;</i>
                                                                </div>
                                                                <div className="goodsPrice">
                                                                    <div className="nowPrice">￥{item.nowPrice}</div>
                                                                    <div className="oldPrice">￥{item.oldPrice}</div>
                                                                </div>
                                                                <div className="nums">
                                                                    <div className="numReduce numsx" onClick={this.props.handleReduce.bind(this, index, item.goodsName, item.goodsNum, item.oldPrice, item.nowPrice, item.goodsImg, item.goodsColor, item.goodsType, item.goodsconId,item._id)}>-</div>
                                                                    <input type="text" value={item.goodsNum} onChange={this.props.handleNumChange.bind(this)} />
                                                                    <div className="numAdd numsx" onClick={this.props.handleAdd.bind(this, index, item.goodsName, item.goodsNum, item.oldPrice, item.nowPrice, item.goodsImg, item.goodsColor, item.goodsType,item.goodsconId, item._id)}>+</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>

                                        <div className="shocparbot">
                                            <input type="checkbox" checked={selectedAll} onChange={this.props.handleSelectedChange.bind(this)} />
                                            <div className="selectAll">全选</div>
                                            <div className="likes" onClick={this.props.hanleAddCollector.bind(this)}>
                                                移入收藏夹
                            </div>
                                            <div className="del" onClick={this.props.handleDel.bind(this)}>删除</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            :
                            <div className="shopcarbody">
                                <Headers title='购物车' />
                                <Emptys imgs="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" likes="看到喜欢的就带回家吧" mores="今日推荐" />
                            </div>

                    }


                </Fragment>


            </ShopcarWrapper>
        )
    }
    async componentDidMount() {
        //let data = await api('秋季男士印花纯棉T恤',5,30,60,'https://goods1.juancdn.com/goods/190820/1/0/5d5ad63233b08932db6dde4a_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg','格子船白','XL','6253')
        this.props.handleGetGoods()
        // let data = await shopcar_api()
        // let goods = data.list

        // let data = await modify_shopcar_api(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,id);
    }
    hanleUpdateShopcar() {
        this.refs.shopcarbox.style.display = "none"
        this.refs.shopcarbox2.style.display = "block"
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcar)