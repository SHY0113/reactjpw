import React , {Component} from "react";
import {Purchases} from "./styled"
import {NavLink,Link} from "react-router-dom"
import fetchJsonp from 'fetch-jsonp'
export default class Purchase extends Component{
    constructor(){
        super();
        this.state = {
            sorts:[],
        }
    }
    render(){
        let {sorts} = this.state;
        console.log(sorts)
        return(
            <Purchases>
                <div className="tabHeaders">
                    <NavLink to={"/home"}>
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/head/btn-back.png?20160412" alt=""/>
                    </NavLink>
                        <span>最后疯抢</span>
                    <div className="fengqiang">
                    </div>
                </div>
                <div className="ovfow">
                    <div className="godos">
                        {
                            sorts.map((item,index)=>(
                                <div className="gCgGoL" key={index}>
                                    <Link to={'/detail/'+item.goods_id}>
                                    <img src={item.pic_url} alt=""/>
                                    <div className="godosName">
                                        <img src={item.shop_logo} alt=""/>
                                    </div>
                                    <div className="cEQZgN">
                                        <span>{item.cprice}</span>
                                        <span>{item.oprice}</span>
                                    </div>
                                    <div className="dFUsnh">{item.title}</div>
                                    <div className="sewak">{item.residue}</div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </Purchases>
        )
    }
    async componentDidMount() {
        fetchJsonp('https://shop.juanpi.com/gsort?key=zuihoufengqiang&type=1&zhouyi_ids=p8_c4_l4&machining=hotcoupon&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&cm=1&cm_channel=4&callback=gsort_callback')
        .then(res=>res.json())
        .then(res=>{
            let sorts = res.list
            this.setState({
                sorts : sorts
            })
        })
    }
}