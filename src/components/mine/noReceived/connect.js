import {getOrdersAsyncAction,orderModifyAsyncAction} from "@actions/order/actionCreator.js"

export const mapStateToProps=(state)=>({
    reorder:state.order.reorder
})
export const mapDispatchToProps = (dispatch)=>({
    handleGetOrders(){
        dispatch(getOrdersAsyncAction())
        this.history.push('/noreceive')
       
    },
    handleClickfirm(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id){
        this.props.history.push('/refund')
        dispatch(orderModifyAsyncAction(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id))
    }
})