import React, { Component } from 'react'
import { EmptyWrapper } from "./styled"
import {withRouter} from "react-router-dom"
class Emptys extends Component {
    render() {
        let { imgs, likes, mores } = this.props;
        return (
            <EmptyWrapper>
                <div className="empty_img">
                    <img src={imgs} />
                </div>
                <div className="empty_like">
                    {likes}
                </div>
                <div className="empty_more" onClick={this.handleGo.bind(this)}>
                    {mores}
                </div>
            </EmptyWrapper>
        )
    }
    handleGo(){
        this.props.history.push("/home")
    }
}

Emptys.defaultProps = {
    imgs: "https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png",
    likes: "11",
    mores: "11"
}

export default withRouter(Emptys);