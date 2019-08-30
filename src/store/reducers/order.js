import {handleActions} from "redux-actions";

const defaultState = {
    payorder:[],
    reorder:[],
    funorder:[],
    allorder:[]
}

export default handleActions({
    ADD_ORDER:(state,action)=>{
        return state
    },
    MODIFY_ORDER:(state,action)=>{
        let ModifyState = JSON.parse(JSON.stringify(state))
        
        return ModifyState
    },
    SELECT_ORDER:(state,action)=>{
        let selectOrderState = JSON.parse(JSON.stringify(state))
        let list = action.payload.data.list
        selectOrderState.allorder = list
        for(var i=0;i<list.length;i++){
            if(list[i].status ==="待付款"){
                selectOrderState.payorder.push(list[i])
            }else if(list[i].status ==="待收货"){
                selectOrderState.reorder.push(list[i])
                
            }else if(list[i].status ==="已收货"){
                selectOrderState.funorder.push(list[i])
            }
        }
        
        return selectOrderState
    }
},defaultState)