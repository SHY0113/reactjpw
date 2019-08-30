import {changeType,regList} from "./actionTypes"
import {reg_api,login_api} from "@api/mine"
import {createAction} from "redux-actions"
export const changeAction = (value,status) =>({
    type:changeType,
    value,
    status
})

export const regAction = createAction("REG_LIST",(val)=>val)
export const regAsyncAction = (username,password)=>{
    return async (dispatch)=>{
        let data = await reg_api(username,password);
        dispatch(regAction({username,password,data}))
    }
}

export const changeLoginAction = (value,status) =>({
    type:"CHANGELOGIN_VALUE",
    value,
    status
})

export const loginAction = createAction("Login_LIST",(val)=>val)
export const loginAsyncAction = (username,password)=>{
    return async (dispatch)=>{
        let data = await login_api(username,password);
        
        dispatch(loginAction({username,password,data}))
    }
}
