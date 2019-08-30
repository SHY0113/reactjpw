import {
    Home,
    List,
    Login,
    Mine,
    Order,
    Register,
    Search,
    Shopcar,
    Purchase,
    Seckill,
    Promotion,
    Life,
    Fur,
    Seek,

} from "@pages"

// import {} from "@components/mine"
import { Collection,NoPaying,NoGroups,NoReceived,ReFund,Quan,Tuan,Info ,About,Address,Pay} from "@components/mine";


export const tabBarRoute = [
    {
        path: "/home",
        component: Home,
        meta: {
            flag: true
        },
        name: "首页",
        icon: "\ue615"
    },
    {
        path: "/list",
        component: List,
        meta: {
            flag: true
        },
        name: "分类",
        icon: "\ue7f8"
    },
    {
        path: "/shopcar",
        component: Shopcar,
        meta: {
            flag: true,
            auth:true
        },
        name: "购物车",
        icon: "\ue617"
    },
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: true,
           
        },
        name: "我的",
        icon: "\ue61f"
    }

]

export const noTabBarRoute = [
    {
        path: "/register",
        component: Register,
        meta: {
            flag: true
        },
        name: "注册",

    },
    {
        path: "/login",
        component: Login,
        meta: {
            flag: true
        },
        name: "登录",
    },
    {
        path: "/search",
        component: Search,
        meta: {
            flag: false
        },
        name: "搜索",
    },
    {
        path: "/order",
        component: Order,
        meta: {
            flag: true
        },
        name: "订单"
    },
    {
        path: "/nopay",
        component: NoPaying,
        meta: {
            flag: true
        },
        name:"未支付",
    },
    {
        path:"/purchase",
        component:Purchase,
        meta:{
            flag:false,
        },
        name:"最后疯抢"
    },
    {
        path:"/seckill",
        component:Seckill,
        meta:{
            flag:false,
        },
        name:"限时秒杀",
        children:[
            {
                path:"/seckill/mist",
                component:()=>import("@components/seckill")
            },
            {
                path:"/seckill/tiems",
                component:()=>import("@components/fur")
            }
        ]
    },
    {
        path:"/promotion",
        component:Promotion,
        meta:{
            flag:false,
        },
        name:"品牌特卖"
    },
    {
        path:"/life",
        component:Life,
        meta:{
            flag:false,
        },
        name:"生活超市"
    },
    {
        path:"/fur",
        component:Fur,
        meta:{
            flag:false,
        },
        name:"皮草专场"
    },
    {
        path: "/nogroup",
        component: NoGroups,
        meta: {
            flag: true
        },
        name: "待成团",
    },
    {
        path: "/noreceive",
        component: NoReceived,
        meta: {
            flag: true
        },
        name: "待收货",
    },
    {
        path: "/refund",
        component: ReFund,
        meta: {
            flag: true
        },
        name: "退款/售后",
    },

    {
        path: "/quan",
        component: Quan,
        meta: {
            flag: false
        },
        name: "优惠券",
    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            flag: false
        },
        name: "收藏",
    },
    {
        path: "/tuan",
        component: Tuan,
        meta: {
            flag: false
        },
        name: "拼团",
    },
    {
        path: "/free",
        component: Mine,
        meta: {
            flag: false
        },
        name: "免单券",
    },
    {
        path: "/balance",
        component: Mine,
        meta: {
            flag: false
        },
        name: "余额",
    },
    {
        path: "/server",
        component: Mine,
        meta: {
            flag: false
        },
        name: "客服",
    },
    {
        path: "/about",
        component: About,
        meta: {
            flag: false
        },
        name: "关于",
    },
    {
        path: "/info",
        component: Info,
        meta: {
            flag: false
        },
        name: "个人信息"
    },
    {
        path: "/address",
        component: Address,
        meta: {
            flag: false
        },
        name: "地址"
    },
    {
        path: "/pay",
        component: Pay,
        meta: {
            flag: false
        },
        name: "支付"
    },
]
export const routeConfig = tabBarRoute.concat(noTabBarRoute)