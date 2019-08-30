import {getOrdersAsyncAction} from "@actions/order/actionCreator.js"

export const mapStateToProps=(state)=>({
    funorder:state.order.funorder
})
export const mapDispatchToProps = (dispatch)=>({
    handleGetOrders(){
        dispatch(getOrdersAsyncAction())
    },
    
})