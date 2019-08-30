import React, { Component } from 'react'
import { Headers, Navbar, Sections,Go } from "./styled"
import { Categoryapi } from "@api/list"
import fetchJsonp from 'fetch-jsonp';
import { Link } from "react-router-dom";
import creatHistory from 'history/createHashHistory'
import Loading from "@common/loading"
import BScrollComponent from "@common/bscroll"
const history = creatHistory();

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            aindex:0,
            data: [],
            isloading: false,
            title: "",
            page:1,
            keyv:[
                `{"cdt":{"is_show_presale":"0","hot_show_type":1,"fcate":"59","sale_type":2},"order":{"show_stime":"desc","sales":"desc","fav":"desc","sort":"desc"}}`,
               ` {"cdt":{"is_show_presale":"0","hot_show_type":1,"fcate":"59","sale_type":2},"order":{"cprice":"asc","show_stime":"desc","fav":"desc","sort":"desc"}}`,
                `{"cdt":{"is_show_presale":"0","hot_show_type":1,"fcate":"59","sale_type":2},"order":{"sales":"desc","show_stime":"desc","fav":"desc","sort":"desc"}}`,
               ` {"cdt":{"is_show_presale":"0","hot_show_type":1,"fcate":"59","sale_type":2},"order":{"start_time":"desc","show_stime":"desc","fav":"desc","sort":"desc"}}`       
            ],
            keyt:["推荐","价格","销量","上新"]

        }
    }
    goBackPage() {
        history.goBack();
    }
    render() {
        if (this.state.isloading) {
            let datarender = this.state.data
            let keyts=this.state.keyt;
            let aindex=this.state.aindex
            return (
                <BScrollComponent ref="bscroll">
                
                
                {/* <img className="gotop" src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/back-top.png?4af681f3-1&amp;sv=449ce9ee"/> */}
                <div>
                    
                    <Headers>
                        <div>
                            <span id="spanOne">
                                <a href="#" onClick={this.goBackPage.bind(this)}>
                                    <i className="iconfont">&#xe6a5;</i>
                                </a>
                            </span>
                            <span id="spanTwo">{this.state.title}</span>
                            <span id="spanThree"></span>
                            {/* <a className="searchicon">
                                <span>
                                    <i className="iconfont">&#xe60b;</i>
                                </span>
                            </a> */}
                            <div className="menuicon">
                                <Link to={"/search"}>
                                    <i className="iconfont">&#xe60b;</i>
                                </Link>
                            </div>
                        </div>
                    </Headers>
                    <Navbar>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        {
                                            keyts.map((item,index) => (
                                                <td key={index} className={aindex==index?"red":""} onClick={this.handleChangeC.bind(this,index)}>{item}</td>
                                            ))
                                        }
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Navbar>
                    <div>
                    
                    <Sections>
                    
                        <ul>
                            {
                                datarender.map((item, index) => (
                                    <Link to={"/detail/"+item.goods_id} key={index}>
                                        <li>
                                            <p className="aone">
                                                <img src={item.pic_url} />
                                            </p>
                                            <div className="atwo">
                                                <div>
                                                    <span className="pricenew">
                                                        <i>￥</i>
                                                        {item.cprice}
                                                    </span>
                                                    <del>{item.oprice}</del>
                                                </div>
                                                <h3>{item.title}</h3>
                                            </div>

                                        </li>
                                    </Link>
                                ))

                            }

                        </ul>
                    </Sections>
                    </div>
                </div>
                
                </BScrollComponent>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
    
    async componentDidMount() {
        let id = this.props.match.params.id
        let datas = await Categoryapi(id);
        let title = datas.name;      
        let key = datas.key;
        console.log(key)
        // 初次获取数据
        let dataneeds =await fetchJsonp ('https://shop.juanpi.com/gsort?key=' + key + '&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page='+this.state.page+'&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=')
            .then(res => res.json())
            .then(res => {
                return res;
            })
        // 更新视图
        this.setState({
            data: dataneeds.list,
            isloading: true,
            title: title
        })
        //上拉加载更多
        this.refs.bscroll.handlepullingUp(async ()=>{
            let Page=++this.state.page;
            let dataneedss =await fetchJsonp ('https://shop.juanpi.com/gsort?key=' + key + '&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page='+Page+'&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=')
            .then(res => res.json())
            .then(res => {
                return res;
            })
                let data=this.state.data.concat(dataneedss.list)  
                this.setState({
                    page:Page,
                    data:data
                })                                     
        }) 
        
        
        
    }
    componentDidUpdate(){
        this.refs.bscroll.handleRestpullingUp()
        
    }
    async handleChangeC(index){
        let dataneedsss =await fetchJsonp ('https://shop.juanpi.com/gsort?key=' + this.state.keyv[index] + '&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=0&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=')
            .then(res => res.json())
            .then(res => {
                return res;
            })
        this.setState({
            aindex:index,
            data:dataneedsss.list
        })
    }
   
}
