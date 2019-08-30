import React, {Component} from 'react';
import {Seekd} from "./styled"
import {NavLink} from "react-router-dom"
class Seek extends Component {
    constructor(){
        super();
        this.state = {
            inputVal:"",
        }
    }
    render() {
        return (
            <Seekd>
                <form action="" className="search-block">
                    <div className="search-input">
                        <button className="search-icon">
                            <i className="iconfont">&#xe60b;</i>
                        </button>
                        <input type="search" id="keyword" name="keyword" x-webkit-speech="" ref="setInputVal"
                               onChange={this.handleVal.bind(this)}/>
                    </div>
                    <NavLink to={"/home"} className="cancel">取消</NavLink>
                </form>
            </Seekd>
        );
    }
    componentDidMount(){
        this.refs.setInputVal.value = "搜索商品"
    }
    handleVal(e){
        let val = e.target.value;
        console.log(val)
    }
}

export default Seek;