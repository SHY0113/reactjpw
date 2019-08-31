import React, { Component } from 'react'
import { Detailsapi } from "@api/list"
import { Detailss, Bottombar, Selection } from "./styled"
import Loading from "@common/loading"
import { Link } from "react-router-dom";
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
class Detail extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isloading: false,
            show: false,
            activeIndex:0,
            activesIndex:0,
            goodsColor:'',
            goodsType:'',
            goodsconId:'',
            num:1
        }
    }
    render() {
       
       // let {goodsColor,goodsType,goodsconId} = this.props
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
                            <div className="topleft"><img src={dataildata.info.goods_origin_url} /></div>
                            <div className="topright">
                                <div className="price">￥{dataildata.info.cprice}</div>
                                <div className="please">请选择颜色尺码</div>
                                <div></div>
                            </div>
                        </div>
                        <img className="close" onClick={this.handleFalse.bind(this)} src="https://web.juanpi.com/static/media/del.bbe4aea1.png" alt="" />
                        <span>{dataildata.info.zav_name}：</span>
                        <div className="large">
                            {
                                types.map((item, index) => (
                                    <div key={index} onClick={this.handleClickTypes.bind(this,item,index)} className={this.state.activeIndex==index?'active':''}>{item}</div>
                                ))
                            }
                        </div>
                        <span>{dataildata.info.fav_name}：</span>
                        <div className="larges">
                            {
                                sizes.map((itm, idx) => (
                                    <div key={idx} onClick={this.handleClickSize.bind(this,itm,idx)} className={this.state.activesIndex==idx?'actives':''}>{itm}</div>
                                ))
                            }
                        </div>
                        <div className="adddel">
                            <span>购买数量</span>
                            <div className="adnum">
                                <span className="del"onClick={this.handleReudc.bind(this)}>-</span>
                                <span className="num">{this.state.num}</span>
                                <span className="del" onClick={this.handleAdds.bind(this)}>+</span>
                            </div>
                        </div>

                        <div className="button" onClick={this.props.handleClickAddShopar.bind(this,dataildata.info.goods_title,this.state.num,dataildata.info.fprice,dataildata.info.fprice,dataildata.info.goods_origin_url,this.state.goodsColor,this.state.goodsType,this.state.goodsconId)}>确定</div>
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
    handleClickTypes(item,index){
       
       this.setState({
           activeIndex:index,
           goodsType:item,
           goodsconId:this.props.location.pathname.split('/')[2]
       })
        //this.refs.colors.style.color = 'red'
    }
    handleClickSize(itm,idx){
        this.setState({
            activesIndex:idx,
            goodsColor:itm,
            goodsconId:this.props.location.pathname.split('/')[2]
        })
       
    }
    handleReudc(){
        if(this.state.num>1){
            this.state.num--
        }
        this.setState({
            num:this.state.num
            
        })
    }
    handleAdds(){
        this.state.num++
        this.setState({
            num:this.state.num
            
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
