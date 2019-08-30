import {changeLoginAction,loginAsyncAction} from "@actions/mine/actionCreator"

export const mapStateToProps = (state)=>({
   
    username:state.mine.username,
    password:state.mine.password,
    list:state.mine.list,
  

})

export const mapDispatchToProps = (dispatch)=>({
    handleLoginChange(type,e){
        let val = e.target.value;
        dispatch(changeLoginAction(val,type))
    },
    handleLogin(val1,val2){
      
        if(val1&&val2){
            dispatch(loginAsyncAction(val1,val2))
            this.props.history.push("/mine")
        }
        
    },
})