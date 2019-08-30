import { handleActions } from "redux-actions";

const defaultState = {
    goods: [],
    selectedAll: true,
    goodsNUM: 0
}

export default handleActions({
    SELECT_SHOP: (state, action) => {
        let goodsState = Object.assign({}, state);
       
        if (action.payload.data.list) {
            goodsState.goods = action.payload.data.list
            goodsState.goods.map((item) => (
                item.flag = true
            ))
        }

        return goodsState
    },
    TOGGLE_SHOP: (state, action) => {
        let selectedAllState = Object.assign({}, state)
        selectedAllState.selectedAll = !selectedAllState.selectedAll
        selectedAllState.goods.forEach(item => {
            item.flag = selectedAllState.selectedAll
        })
        return selectedAllState
    },
    SELECT_GOODS: (state, action) => {
        let selectGoodsState = JSON.parse(JSON.stringify(state));
        let index = action.value
        selectGoodsState.goods[index].flag = !selectGoodsState.goods[index].flag;
        var bStop = true;
        for (var i = 0; i < selectGoodsState.goods.length; i++) {
            if (!selectGoodsState.goods[i].flag) {
                bStop = false;
                break;
            }
        }
        selectGoodsState.selectedAll = bStop;
        return selectGoodsState
    },
    REDUCE_GOODS: (state, action) => {
        let reduceState = JSON.parse(JSON.stringify(state));
        if (reduceState.goods[action.payload].flag && reduceState.goods[action.payload].goodsNum > 1) {

            reduceState.goods[action.payload].goodsNum--
        }

        //reduceState.goodsNUM=reduceState.goods[action.payload].goodsNum
        return reduceState;
    },
    ADD_GOODS: (state, action) => {
        let addGoodsState = JSON.parse(JSON.stringify(state));
        //console.log(addGoodsState.goods)
        if (addGoodsState.goods[action.payload].flag) {
            addGoodsState.goods[action.payload].goodsNum++
        }
        //addGoodsState.goodsNUM=addGoodsState.goods[action.payload].goodsNum
        return addGoodsState;
    },
    
    DEL_GOODS: (state, action) => {
        return state
    },
    ADD_COLLECT:(state,action)=>{
        return state
    }



}, defaultState)