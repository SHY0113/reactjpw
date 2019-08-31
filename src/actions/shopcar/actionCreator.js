// import {TOGGLE_SHOP,SELECT_ALL_SHOP} from "./actionTypes"

import {createAction} from "redux-actions"
import { shopcar_api,modify_shopcar_api,del_shopcar_api ,add_collect_api,add_order_api,api} from "@api/mine";


export const changeAction = ()=>({
    type:'TOGGLE_SHOP'
})
export const changeSelectAction = (index)=>({
    type:"SELECT_GOODS",
    value:index
})
export const reduceNumAction = createAction('REDUCE_GOODS',(index)=>index)

export const reduceNumAsyncAction = (index,goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id)=>{
    
    return async (dispatch)=>{
        let data = await modify_shopcar_api(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id,);
        dispatch(reduceNumAction(index,data))
    }
}

export const addNumAction =createAction('ADD_GOODS',(index)=>index)
export const addNumAsyncAction = (index,goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id)=>{
    
    return async (dispatch)=>{
        let data = await modify_shopcar_api(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id,);
        dispatch(addNumAction(index,data))
    }
}

export const addShopcarAction = createAction('ADD_SHOPCAR',(val)=>val);

export const addShopcarAsyncAction = (goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId)=>{
    return async (dispatch)=>{
        let data = await api(goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId);
        dispatch(addShopcarAction(data))
    }
}

export const getGoodsAction = createAction('SELECT_SHOP',(val)=>val);

export const getGoodsAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await shopcar_api();
        dispatch(getGoodsAction(data))
    }
}

export const delAction=createAction('DEL_GOODS',(val)=>val)

export const delAsyncAction = (id)=>{
    return async (dispatch)=>{
        let data = await del_shopcar_api(id);
        dispatch(delAction(data))    
    }
    
}

export const collectionAction = createAction('ADD_COLLECT',(val)=>val)

export const collectAsyncAction=(goodsName,oldPrice,nowPrice,goodsImg)=>{
    return async (dispatch)=>{
        let data = await add_collect_api(goodsName,oldPrice,nowPrice,goodsImg);
        dispatch(collectionAction(data))
        
        
    }
}

export const payAction = createAction('ADD_ORDER',(val)=>val)

export const payAsyncAction=(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId)=>{
    
    return async (dispatch)=>{
        let data = await add_order_api(goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId);
        dispatch(payAction(data))
        
        
    }
}



