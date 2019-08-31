import {changeAction,regAsyncAction} from "@actions/mine/actionCreator"

export const mapStateToProps = (state)=>({
   
    username:state.mine.username,
    password:state.mine.password,
    list:state.mine.list,
  

})

export const mapDispatchToProps = (dispatch)=>({
    handleChange(type,e){
        let val = e.target.value;
        dispatch(changeAction(val,type))
    },
    handleRegister(val1,val2){
        if(val1&&val2){
            dispatch(regAsyncAction(val1,val2))
           
        }
        
    },
})