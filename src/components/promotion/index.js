import React, {Component} from 'react';
import {Promotions} from "./styled"
import {NavLink,Link} from "react-router-dom"
import http from "@utils/http"
import {getBrandClearanceGoods,getBrandClearanceLimitAndAds} from "@api/home"
class Promotion extends Component {
    constructor(){
        super();
        this.state = {
            ClearanceGoods:[],
            Limit:[],
            box:["10:00","13:00","20:00"],
            fleg:true,
            activeIndex:1,
            isLoading:false,
            sert:"jingxuan",
            classify:[
                {
                    name:"精选",
                    pke:"jingxuan"
                },{
                    name:"鞋包配饰",
                    pke:"xiezi"
                },{
                    name:"美妆",
                    pke:"meizhuang"
                },{
                    name:"运动",
                    pke:"yundong"
                },{
                    name:"母婴童装",
                    pke:"muyingtongzhuang"
                },{
                    name:"居家数码",
                    pke:"jujiashuma"
                },],
            classifyIndex:0,
            flas:true,
            datas:[],
            lists:[],
        }
    }
    render() {
        if(this.state.isLoading){
            let {box} = this.state
            let {ClearanceGoods,Limit,activeIndex,classify,classifyIndex,flas,sert,datas,lists} = this.state;
            let conse = Limit[activeIndex]
            return (

                <Promotions>
                    <div className="fower">
                        <div className="heders">
                            <NavLink to={"/home"}>
                                <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/head/btn-back.png?20160412" alt=""/>
                            </NavLink>
                            <span>品牌特卖</span>
                            <div></div>
                        </div>
                        <div className="jAXoWF">
                            {
                                classify.map((item,index)=>(
                                    <div ref="liset" key={index} onClick={this.handleClassify.bind(this,item.pke,index)} className={classifyIndex == index ? "classifys" : ""}>{item.name}</div>
                                ))
                            }
                        </div>
                       {flas ? <div className="listsit" >
                            <div className="listone">
                                <div className="bCRFsu">
                                    <img className="sc-iuJeZd jERWPe"
                                         src="http://goods3.juancdn.com/act/180125/4/c/5a6984fb8150a12cfa77daf2_1080x98.png"/>
                                    <div className="cXgArb">
                                        {
                                            box.map((item,index) =>(
                                                <div key={index} className={activeIndex == index ? "liststyle" : "fPyHRg"}  onClick={this.handleClick.bind(this,index)}>{item}</div>
                                            ))
                                        }

                                    </div>
                                    <div className="heGFUq">
                                        {
                                            conse.goods.map((item,index)=>(
                                                <Link to={"/detail/"+item.en_gid} key={index}>
                                                <div className="dBwiwQ" key={index}>
                                                    <div className="sc-bMVAic bCzSuS">
                                                        <img className="sc-bAeIUo foAbNb"
                                                             src={item.gi_pic}/>
                                                    </div>
                                                    {
                                                        item.logo_url ? <div className="sc-GMQeP gHWjeR">
                                                            <img
                                                                src={item.logo_url}/>
                                                        </div> : ""
                                                    }

                                                    <div className="sc-cQFLBn jJFJOc">
                                                        <span className="sc-gojNiO bLscwm">¥{item.gi_tuan_price}</span>
                                                        <span className="sc-daURTG bIFuUN">¥{item.gi_price}</span>
                                                    </div>
                                                </div></Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="fxuefb">
                                    <div className="gAYsSb">
                                        <span>-- 大牌狂欢齐嗨购 --</span>
                                    </div>
                                    {
                                        ClearanceGoods.map((item,index) =>(
                                            <div className="lkKkBh" key={index}>
                                                <div className="hPNHui">
                                                    <img
                                                        src={item.ss_cover}
                                                        alt=""/>
                                                </div>
                                                <div className="jpCDTX">
                                                    {
                                                        item.sub_data.map((ince,index)=>(
                                                            <Link to={"/detail/"+item.goods_id} key={index}>
                                                            <div className="hikkYG" key={index}>
                                                                <div className="kNQLMc">
                                                                    <img className="PRiOv" src={ince.pic}/>
                                                                </div>
                                                                <div className="lbpoJk">
                                                                    <span className="jPfjAt">{ince.cp}</span>
                                                                    <del className="hFfzt">{ince.op}</del>
                                                                </div>
                                                                <div className="cYVKNa">{ince.title}</div>
                                                            </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                           :
                           <div className="krvtoX" sert={sert}>
                               {
                                   lists ?<nav className="bshzRW">
                                           {
                                               lists.map((item,index)=>(
                                                   <span className="hPxoan" rel="" key={index}>{item.title}</span>
                                               ))
                                           }
                                       </nav>
                                       : ""
                               }

                               <div className="plist">
                                   {
                                       datas.map((item,index)=>(
                                           <div className="lisepst" key={index}>
                                               <Link to={"/detail/"+item.goods_id}>
                                                <div className="hjmAMV">
                                                    <img className="emNqIh" src={item.pic_url}/>
                                                </div>
                                                <div className="klxPuT">
                                                    <span className="efvkRd">{item.cprice}</span>
                                                    <span className="dssBBx">¥{item.oprice}</span>
                                                </div>
                                                <span className="sLECb">{item.title}</span>
                                               </Link>
                                           </div>
                                       ))
                                   }

                               </div>
                           </div>
                       }
                    </div>
                </Promotions>
            );
        }else{
            return(
                <div></div>
            )
        }

    }
    async componentDidMount(){
        let getBrand = await getBrandClearanceGoods()
        let LimitAndAds = await getBrandClearanceLimitAndAds()
        this.setState({
            ClearanceGoods : getBrand.data.goods,
            Limit : LimitAndAds.limitInfo.data,
            isLoading:true,
        })
    }
    handleClick(index){
        this.setState({
            activeIndex : index
        })
    }
    async handleClassify(pke,index){
        let data = await http.get("/api/getBrandClearanceOtherGoods", {cate_key:pke,page:1,pf:"m",brandclear:"brandclear_127_419_A"})
        console.log(pke)
        if(index === 0){
            this.setState({
                flas:true,
                classifyIndex : index,
            })
            return
        }
        this.setState({
            sert : pke,
            classifyIndex : index,
            flas:false,
            datas : data.data.goods,
            lists : data.data.cate_key_info
        })
    }
}

export default Promotion;