import React, { Component } from 'react'
import {Seekd,Content,Failed} from "./styled"
import {Link} from "react-router-dom"
import {SearchApi} from '@api/searchdetail'
import BScrollComponent from "@common/bscroll"
export default class SearchDetail extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isloading:false,
            value:"",
            page:1,
            dataall:[]
        }
    }
    render() {
        if(this.state.isloading){
        let datas=this.state.data;
        let dataall=this.state.dataall
        return (
            <BScrollComponent ref="bscroll">
            <div>
                
                <Seekd>
                <form action="" className="search-block">
                    <div className="search-input">
                        <button className="search-icon">
                            <i className="iconfont">&#xe60b;</i>
                        </button>
                        <input placeholder={"搜索商品"} 
                        onChange={this.handelChange.bind(this)}
                        onKeyDown={this.onkeydown.bind(this)}/>
                    </div>
                    <Link to={"/home"} className="cancel">取消</Link>
                </form>
            </Seekd>
            <Failed>
                    <div className={this.state.dataall.data.aggs.cat_threeid?"false":"true"}>
                    <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/rearch-result.png?d5c13c9b-1&amp;sv=449ce9ee" />
                    <div className="b-title">哎呀，结果溜走了，换个词试试</div>
                    <div className="l-title">为您推荐以下商品</div>
                    </div>
                </Failed>
            <Content>
                <ul>
                {
                   datas.map((item, index) => (                  
                    <Link to={"/detail/"+item.enid} key={index}>
                        <li>
                            <p className="aone">
                                <img src={item.picurl} />
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
            </Content>
            </div>
            </BScrollComponent>
        )
        }else{
            return(<div></div>)
            
        }
    }
    async componentDidMount(){
        let key=this.props.match.params.value
        
        let data=await SearchApi(key,this.state.data.page);
        this.setState({
            data:data.data.list,
            isloading:true,
            dataall:data
        })
        this.refs.bscroll.handlepullingUp(async ()=>{
            let Page=++this.state.page;
            let data=await SearchApi(this.state.value,Page);
            let datas=this.state.data.concat(data.data.list)  
                this.setState({
                    page:Page,
                    data:datas
                })                                     
        }) 
    } 
    // componentDidUpdate(){
    //     this.refs.bscroll.handleRestpullingUp()
        
    // }
    handelChange(e){
        let value=e.target.value;     
        this.setState({
            value:value
        })
    }  
    async onkeydown(e){
        if(e.keyCode === 13){       
        let data=await SearchApi(this.state.value);
        this.setState({
            data:data
        })
        }
        
    }
    
}
