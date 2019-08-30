import React, {Component} from 'react';
import {Seekd} from "./styled"
import {Link} from "react-router-dom"
import { withRouter } from 'react-router';

class Seek extends Component {
    constructor(){
        super();
        this.state = {
            inputVal:"",
        }
    }
    render() {
        return (
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
            
            </div>
        );
    }
    componentDidUpdate(){
		document.addEventListener('keydown',this.onkeydown);
	}
    onkeydown = (e)=>{
		if (e.keyCode === 13) {
            console.log(this)
			this.handleSend()
		}
    }
    handleSend = (e)=>{
        let values=this.state.inputVal;
        console.log(values)
        this.props.history.push("/searchdetail/:"+values)
    }
    handelChange(e){
        let value=e.target.value;
        this.setState({
            inputVal:value
        })
    }
        
}


export default Seek;