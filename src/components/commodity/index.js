import React, {Component,Fragment} from 'react';
import {getGoods} from "@api/home";
import {Link} from "react-router-dom"
import {Homes} from "@pages/home/styled"
class Commodity extends Component {
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
                            <Link to={"/detail/"+item.goods_id}>
                            <img
                                src={item.pic_url}
                                alt=""/>
                            <div className="cEQZgN">
                                <span>￥{item.cprice}</span>
                                <span>￥{item.oprice}</span>
                            </div>
                            <div className="dFUsnh">{item.title}</div>
                            <div className="kDoQxf">{item.time_left}</div>
                        </Link>
                        </div>
                    ))
                }
            </Fragment>
        );
    }
    async componentDidMount(){
        let getgoods = await getGoods();
        this.setState({
            list : getgoods.data.goods
        })
    }
}

export default Commodity;