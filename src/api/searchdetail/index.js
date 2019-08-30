import http from "@utils/http";
//分类页面
export const SearchApi=(keyword,storeid='',item='',user_groupids='p8_c4_l4_222',page,is_ajax=1,order='',sort='',cat_threeids='',price_range='',filter_id='')=>http.get("/search",{keyword,storeid,item,user_groupids,page:1,is_ajax,order,sort,cat_threeids,price_range,filter_id})
// https://m.juanpi.com/search?keyword=%E7%94%B7%E8%A3%85&storeid=&item=&user_groupids=p8_c4_l4_222&page=1&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id=