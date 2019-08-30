import {createAction} from "redux-actions"
import { select_collect_api,del_collect_api} from "@api/mine";

export const getCollectAction = createAction('SELECT_COLLECT',(val)=>val);

export const getCollectAsyncAction = ()=>{
    return async(dispatch)=>{
        let data = await select_collect_api();
        dispatch(getCollectAction(data))
    }
    
}
export const changeSelectAction = (index)=>({
    type:"SELECT_INDEXCOLLECT",
    value:index
})

export const delCollectAction=createAction('DEL_COLLECT',(val)=>val)

export const delCollectAsyncAction = (id)=>{
    return async (dispatch)=>{
        let data = await del_collect_api(id);
        dispatch(delCollectAction(data))
        
    }
    
}