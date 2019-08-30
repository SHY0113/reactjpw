import {orderModifyAsyncAction} from "@actions/order/actionCreator.js"
export const mapStateToProps=(state)=>({
    
})
export const mapDispatchToProps = (dispatch)=>({
    handleFinshOrder(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id){
        this.props.history.push("/noreceive")
        dispatch(orderModifyAsyncAction(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id))
    }
})