import {getCollectAsyncAction,changeSelectAction,delCollectAsyncAction} from "@actions/collection/actionCreator"
export const mapStateToProps=(state)=>({
    collect:state.collection.collect,
    indexNum:state.collection.indexNum
})
export const mapDispatchToProps = (dispatch)=>({
    handleGetCollection(){
        dispatch(getCollectAsyncAction())
    },
    handleChangeClick(index){
        dispatch(changeSelectAction(index))
    },
    handleDelCollect(){
        for(var i=0;i<this.props.collect.length;i++){
            if(this.props.collect[i].flag){       
                dispatch(delCollectAsyncAction(this.props.collect[i]._id))
            }
            window.location.reload()
            //this.props.history.push('/shocpar')
        } 
    },
})