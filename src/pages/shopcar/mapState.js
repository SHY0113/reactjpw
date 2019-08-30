import {changeAction,getGoodsAsyncAction,changeSelectAction,reduceNumAsyncAction,addNumAsyncAction,delAsyncAction,collectAsyncAction,payAsyncAction} from "@actions/shopcar/actionCreator"

export const mapStateToProps = (state)=>({
    goods:state.shopcar.goods,
    selectedAll:state.shopcar.selectedAll,
    goodsNUM:state.shopcar.goodsNUM,
  

})

export const mapDispatchToProps = (dispatch)=>({
    handleGetGoods(){
        dispatch(getGoodsAsyncAction())
    },
    handleSelectedChange(){
        dispatch(changeAction())
    },
    handleGoodsSelect(index){
        dispatch(changeSelectAction(index))
    },
    handleReduce(index,goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id){
        
        dispatch(reduceNumAsyncAction(index,goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id))
    },
    handleAdd(index,goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id){

        dispatch(addNumAsyncAction(index,goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id))
    },
    handleNumChange(){
        
    },
    hanlefinshShopcar() {
        this.refs.shopcarbox2.style.display = "none"
        this.refs.shopcarbox.style.display = "block"
        //console.log(modifyIndex)
        //dispatch(modifygoodsAsyncAction())
    },
    handleDel(){
        for(var i=0;i<this.props.goods.length;i++){
            if(this.props.goods[i].flag){       
                dispatch(delAsyncAction(this.props.goods[i]._id))
            }
            window.location.reload()
            //this.props.history.push('/shocpar')
        } 
    },
    hanleAddCollector(){
        this.props.history.push("/collection")
        for(var i=0;i<this.props.goods.length;i++){
            if(this.props.goods[i].flag){      
                // console.log(this.props.goods[i].goodsName)
                dispatch(collectAsyncAction(this.props.goods[i].goodsName,this.props.goods[i].oldPrice,this.props.goods[i].nowPrice,this.props.goods[i].goodsImg))
            }
            
            //window.location.reload()
            //this.props.history.push('/shocpar')
        } 
    },
    handleClickPay(){
        //
        for(var i=0;i<this.props.goods.length;i++){
            if(this.props.goods[i].flag){      
                dispatch(payAsyncAction(this.props.goods[i].goodsName,this.props.goods[i].goodsNum,this.props.goods[i].oldPrice,this.props.goods[i].nowPrice,this.props.goods[i].goodsImg,this.props.goods[i].goodsColor,this.props.goods[i].goodsType,this.props.goods[i].goodsconId,this.props.goods[i].id))
                this.props.history.push({pathname:"/pay/"+this.props.goods[i].goodsconId})
                dispatch(delAsyncAction(this.props.goods[i]._id))
            }
        } 
    }
})