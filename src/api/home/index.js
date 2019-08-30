import http from "@utils/http.js";
export const homeNrom = (page=1,zy_ids="p8_c4_l4",app_name="zhe",catname="newest_zhe") =>http.get("/api/getIndexNavSkip",{page,zy_ids,app_name,catname})
export const getIndexNavSkip = (page=1,zy_ids="p8_c4_l4",app_name="zhe",catname="newest_zhe") => http.get("/api/getIndexNavSkip",{page,zy_ids,app_name,catname})
export const getGoods = (page=1,zy_ids="p8_c4_l4",app_name="zhe",catname="tab_hpdp",flag="tab_hpdp") => http.get("/api/getGoods",{page,zy_ids,app_name,catname,flag})
export const timebuy = () => http.get("/shopcart/act/timebuy-xrgoodslist",{})
export const getTable = (platform="m") => http.get("/timebuy/getTable",{platform})
export const getBrandGoods = (page=1,brand_id="5585715_5585715",msort=1,goods_utype="C4",price_range="",cat_threeids="") => http.get("/api/getBrandGoods",{
    page,brand_id,msort,goods_utype,price_range,cat_threeids
})
export const getBrandClearanceGoods = (cid="ppqc_jingxuan",zhouyi_ids="p8_c4_l4",page=1) => http.get("/api/getBrandClearanceGoods",{cid,zhouyi_ids,page})
export const getBrandClearanceLimitAndAds = (cid="ppqc_jingxuan",zy_ids="c4_l4",app_name="zhe",catname="") => http.get("/api/getBrandClearanceLimitAndAds",{cid,zy_ids,app_name,catname})
//https://m.juanpi.com/act/timebuy-xrgoodslist

//http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=meizhuang&page=1&pf=m&brandclear=brandclear_127_419_A
//http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=xiezi&page=1&pf=m&brandclear=brandclear_127_419_A
//http://webservice.juanpi.com/api/getBrandClearanceLimitAndAds?cid=ppqc_jingxuan&zy_ids=c4_l4&app_name=zhe&catname=
//https://webservice.juanpi.com/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4&page=1
//https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=5585715_5585715&msort=1&goods_utype=C4&price_range=&cat_threeids=
//https://mapi.juanpi.com/timebuy/getTable?platform=m
// https://m.juanpi.com/act/timebuy-xrgoodslist
//https://shop.juanpi.com/gsort?key=zuihoufengqiang,type=1,zhouyi_ids=p8_c4_l4,machining=hotcoupon,page=1,rows=10,dtype=JSONP,price_range=,cat_threeids=,filter_id=,cm=1,cm_channel=4,callback=gsort_callback
//https://webservice.juanpi.com/api/getGoods?page=1,zy_ids=p8_c4_l4,app_name=zhe,catname=tab_hpdp,flag=tab_hpdp
//https://webservice.juanpi.com/api/getIndexNavSkip?page=1,zy_ids=p8_c4_l4,app_name=zhe,catname=newest_zhe
//https://webservice.juanpi.com/api/getIndexNavSkip?page=1,zy_ids=p8_c4_l4,app_name=zhe,catname=newest_zhe