import { handleActions } from "redux-actions";

const defaultState = {
    collect: [],
    indexNum:0
    
}

export default handleActions({
    SELECT_COLLECT: (state, action) => {
        let collectState = Object.assign({}, state);
        if (action.payload.data.list) {
            collectState.collect = action.payload.data.list
            collectState.collect.map((item) => (
                item.flag = false
            ))
        }
        return collectState
    },
    SELECT_INDEXCOLLECT:(state,action)=>{
        let selectCollectState = JSON.parse(JSON.stringify(state));
        let index = action.value
        selectCollectState.collect[index].flag = !selectCollectState.collect[index].flag;
        for(var i=0;i<selectCollectState.collect.length;i++){
            if(selectCollectState.collect[i].flag){
                selectCollectState.indexNum++
                
            }
            break;
        }
        return selectCollectState
    },
    DEL_COLLECT:(state,action)=>{
        return state
    }
}, defaultState)