import { handleActions } from "redux-actions";

const defaultState = {
    payorder: [],
    reorder: [],
    funorder: [],
    allorder: []
}

export default handleActions({
    ADD_ORDER: (state, action) => {
        return state
    },
    MODIFY_ORDER: (state, action) => {
        let ModifyState = JSON.parse(JSON.stringify(state))

        return ModifyState
    },
    SELECT_ORDER: (state, action) => {
        let selectOrderState = JSON.parse(JSON.stringify(state))
        let list = action.payload.data.list;
        let arr = []
        let arr1 = []
        let arr2 = []
        if (list) {
            selectOrderState.allorder = list
            for (var i = 0; i < list.length; i++) {
                if (list[i].status === "待付款") {
                    arr.push(list[i])
                    selectOrderState.payorder=arr;
                   
                } else if (list[i].status === "待收货") {
                    arr1.push(list[i])
                    selectOrderState.reorder=arr1;
                    
                   
                } else if (list[i].status === "已收货") {
                    arr2.push(list[i])
                    selectOrderState.funorder=arr2;
                    
                   
                }
            }
        }


        return selectOrderState
    }
}, defaultState)