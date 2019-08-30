

import {handleActions} from "redux-actions";

const defaultState = {
    username: "",
    password: "",
    list: [],
}

export default handleActions({
    CHANGE_VALUE:(state,action)=>{
        switch (action.status) {
            case 1:
                let usernameState = Object.assign({}, state)
                usernameState.username = action.value
                return usernameState
            case 2:
                let passwordState = Object.assign({}, state)
                passwordState.password = action.value
                return passwordState
        }
    },
    REG_LIST:(state,action)=>{
        
        let addState = Object.assign({}, state)
            
            addState.username = ""
            addState.password =""
            
            return addState
    },
    CHANGELOGIN_VALUE:(state,action)=>{
        switch (action.status) {
            case 1:
                let usernameLoginState = Object.assign({}, state)
                usernameLoginState.username = action.value
                return usernameLoginState
            case 2:
                let passwordLoginState = Object.assign({}, state)
                passwordLoginState.password = action.value
                return passwordLoginState
        }
    },
    Login_LIST:(state,action)=>{
     
        let LoginState = Object.assign({}, state)
            
            LoginState.username = ""
            LoginState.password =""
            
            return LoginState
    }
},defaultState)