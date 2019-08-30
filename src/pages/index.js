import Loadeable from "react-loadable";
import Loading from "@common/loading"

const Home = Loadeable({
    loader:()=>import("./home"),
    loading:Loading
})
const List = Loadeable({
    loader:()=>import("./list"),
    loading:Loading
})
const Login = Loadeable({
    loader:()=>import("./login"),
    loading:Loading
})
const Mine = Loadeable({
    loader:()=>import("./mine"),
    loading:Loading
})
const Order = Loadeable({
    loader:()=>import("./order"),
    loading:Loading
})
const Register = Loadeable({
    loader:()=>import("./register"),
    loading:Loading
})
const Search = Loadeable({
    loader:()=>import("./search"),
    loading:Loading
})
const Shopcar = Loadeable({
    loader:()=>import("./shopcar"),
    loading:Loading
})
const Purchase = Loadeable({
    loader:()=>import("@components/purchase"),
    loading:Loading
})
const Seckill = Loadeable({
    loader:()=>import("@components/seckill"),
    loading:Loading
})
const Promotion = Loadeable({
    loader:()=>import("@components/promotion"),
    loading:Loading
})
const Life = Loadeable({
    loader:()=>import("@components/life"),
    loading:Loading
})
const Fur = Loadeable({
    loader:()=>import("@components/fur"),
    loading:Loading
})
const Seek = Loadeable({
    loader:()=>import("@components/seek"),
    loading:Loading
})

export {
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

}