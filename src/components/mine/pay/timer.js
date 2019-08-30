import React,{ Component } from 'react';
class OrderDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:""
        }
    }
    timeTransition = (ms) => {
        let maxtime = ms / 1000; //按秒计算
        let timer = null;
        let _this = this;
        setTimeout(function f(){
            if (maxtime >= 0) {
                let minutes = Math.floor(maxtime / 60);
                let seconds = Math.floor(maxtime % 60);
                minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
                seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
                let msg = "请在 <em>" + minutes + "分" + seconds + "秒</em> 内完成支付";
                _this.setState({
                    msg
                });
                --maxtime;
            } else{
                _this.setState({
                    msg:'订单已过期，请重新下单'
                });
                clearTimeout(timer);
                return;
            }
            timer = setTimeout(f,1000);
        },1000);
    }
    componentDidMount(){
        this.timeTransition(20000);//根据接口返回的时间
    }
}
export default OrderDetail;