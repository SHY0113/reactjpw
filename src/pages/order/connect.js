import {getOrdersAsyncAction} from "@actions/order/actionCreator.js"

export const mapStateToProps=(state)=>({
    allorder:state.order.allorder
})
export const mapDispatchToProps = (dispatch)=>({
    handleGetOrders(){
        dispatch(getOrdersAsyncAction())
    },
    
})