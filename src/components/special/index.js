import React, {Component,Fragment} from 'react';
import {homeNrom} from "@api/home";
import {Homes} from "@pages/home/styled"
class Special extends Component {
    constructor(){
        super();
        this.state = {
            list : [],

        }
    }
    render() {
        let {list} = this.state;
        return (
            <Fragment>
                {
                    list.map((item,index) => (
                        <div className="gCgGoL" key={index}>
                            <img
                                src={item.pic_url}
                                alt=""/>
                            <div className="cEQZgN">
                                <span>￥{item.cprice}</span>
                                <span>￥{item.oprice}</span>
                            </div>
                            <div className="dFUsnh">{item.title}</div>
                            <div className="kDoQxf">{item.time_left}</div>
                        </div>
                    ))
                }
            </Fragment>
        );
    }
    async componentDidMount(){
        let homenrom = await homeNrom();
        this.setState({
            list : homenrom.GoodsRes.goods
        })
    }
}

export default Special;