import {createAction} from "redux-actions"
import { modify_order_api ,select_order_api} from "@api/mine";

export const orderModifyAction = createAction('MODIFY_ORDER',(val)=>val)

export const orderModifyAsyncAction=(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id)=>{
    console.log(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id)
    return async (dispatch)=>{
        let data = await modify_order_api(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id);
        dispatch(orderModifyAction(data))  
    }
}

export const getOrdersAction = createAction('SELECT_ORDER',(val)=>val);

export const getOrdersAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await select_order_api();
        dispatch(getOrdersAction(data))
    }
}
