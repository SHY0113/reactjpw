import http from "@utils/http"

//注册
export const reg_api = (username,password) =>http.post("/users/register",{username,password})
//登录
export const login_api = (username,password) =>http.post("/users/login",{username,password})
//加入购物车
export const api = (goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId)=>http.post("/goods/add",{goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId})
//查看购物车
export const shopcar_api = ()=>http.get("/goods/getGoods")
//修改购物车
export const modify_shopcar_api = (goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id)=>http.post("/goods/modify",{goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,id})
//删除购物车
export const del_shopcar_api = (id)=>http.get("/goods/removeGoods",{id})
//加入收藏夹
export const add_collect_api = (goodsName,oldPrice,nowPrice,goodsImg)=>http.post("/goods/addCollect",{goodsName,oldPrice,nowPrice,goodsImg})
//查看收藏夹
export const select_collect_api = ()=>http.get("/goods/getCollect")
//删除收藏夹
export const del_collect_api = (id)=>http.get("/goods/removeCollect",{id})

//加入订单
export const add_order_api = (goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId,status="待付款")=>http.post("/goods/addOrder",{goodsName,goodsNum,nowPrice,oldPrice,goodsImg,goodsColor,goodsType,goodsconId,status})
//getOrderid查看订单
export const select_orderid_api = (goodsconId)=>http.get("/goods/getOrderid",{goodsconId})

//查看订单
export const select_order_api = ()=>http.get("/goods/getOrder")
//修改订单
export const modify_order_api = (goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id)=>http.post("/goods/modifyOrder",{goodsName,goodsNum,oldPrice,nowPrice,goodsImg,goodsColor,goodsType,goodsconId,status,id})
//删除订单
export const del_order_api = (id)=>http.get("/goods/removeOrder",{id})