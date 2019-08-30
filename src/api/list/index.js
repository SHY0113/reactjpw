import http from "@utils/http";
//分类页面
export const ListPage=(cate_id=59,pf=8,area=4,bi=222,source='null',front_cid='null')=>http.get("/cate/subcatelist",{cate_id,pf,area,bi,source,front_cid})
export const Categoryapi=(cate_id)=>http.get("/cate/subcatelist",{cate_id,pf:8,area:4,bi:222,source:'null',front_cid:'null'})
export const Detailsapi=(goods_id,req_coupons_id)=>http.get("/api/getMemberAboutInfo",{goods_id,is_pt_goods:0,req_coupons_id})
// https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=114319183&sa_id=22998018&is_pt_goods=0&req_coupons_id=114319183