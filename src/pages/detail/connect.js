import {addShopcarAsyncAction} from "@actions/shopcar/actionCreator.js"
export const mapStateToProps=(state)=>({
    // goodsColor:state.shopcar.goodsColor,
    // goodsType:state.shopcar.goodsType,
    // goodsconId:state.shopcar.goodsconId
})
export const mapDispatchToProps = (dispatch)=>({
    handleClickAddShopar(goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId){
        this.props.history.push("/shopcar")
        dispatch(addShopcarAsyncAction(goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId))
    }
})