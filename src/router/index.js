import {
    Home,
    List,
    Login,
    Mine,
    Order,
    Register,
    Search,
    Shopcar,
    Category,
    Detail
} from "@pages";
import SearchDetail from "../pages/searchdetail";
export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue615"
    },
    {
        path:"/list",
        component:List,
        meta:{
            flag:true
        },
        name:"分类",
        icon:"\ue7f8"
    },
    {
        path:"/shopcar",
        component:Shopcar,
        meta:{
            flag:true,
           
        },
        name:"购物车",
        icon:"\ue617"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            auth:true
        },
        name:"我的",
        icon:"\ue61f"
    }

]

export const noTabBarRoute = [
    {
        path:"/register",
        component:Register,
        meta:{
            flag:false
        },
        name:"注册",
       
    },
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登录",
    },
    {
        path:"/oredr",
        component:Order,
        meta:{
            flag:false
        },
        name:"订单"
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:false
        },
        name:"搜索",
    },
    {
        path:"/category/:id",
        component:Category,
        meta:{
            flag:false
        },
        name:"商品",
    },
    {
        path:"/detail/:ids",
        component:Detail,
        meta:{
            flag:false
        },
        name:"商品详情",
    },
    {
        path:"/searchdetail/:value",
        component:SearchDetail,
        meta:{
            flag:false
        },
        name:"搜索之后页面",
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)