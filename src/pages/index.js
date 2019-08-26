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

export {
    Home,
    List,
    Login,
    Mine,
    Order,
    Register,
    Search,
    Shopcar
}