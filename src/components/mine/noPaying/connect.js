import {getOrdersAsyncAction,orderModifyAction} from "@actions/order/actionCreator.js"

export const mapStateToProps=(state)=>({
    payorder:state.order.payorder
})
export const mapDispatchToProps = (dispatch)=>({
    handleGetOrders(){
        dispatch(getOrdersAsyncAction())
    },
    handleClickPay(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id){
        this.props.history.push('/noreceive')
        dispatch(orderModifyAction(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id))
    }
})