import Loadeable from "react-loadable";
import Loading from "@common/loading"

const Collection = Loadeable({
    loader:()=>import("./collection"),
    loading:Loading
})
const NoPaying = Loadeable({
    loader:()=>import("./noPaying"),
    loading:Loading
})
const NoGroups = Loadeable({
    loader:()=>import("./noGroups"),
    loading:Loading
})
const NoReceived = Loadeable({
    loader:()=>import("./noReceived"),
    loading:Loading
})
const ReFund = Loadeable({
    loader:()=>import("./refund"),
    loading:Loading
})
const Quan = Loadeable({
    loader:()=>import("./quan"),
    loading:Loading
})
const Tuan = Loadeable({
    loader:()=>import("./tuan"),
    loading:Loading
})
const Info = Loadeable({
    loader:()=>import("./info"),
    loading:Loading
})
const About = Loadeable({
    loader:()=>import("./about"),
    loading:Loading
})
const Address = Loadeable({
    loader:()=>import("./address"),
    loading:Loading
})
const Pay = Loadeable({
    loader:()=>import("./pay"),
    loading:Loading
})

export {
    Collection,
    NoPaying,
    NoGroups,
    NoReceived,
    ReFund,
    Quan,
    Tuan,
    Info,
    About,
    Address,
    Pay
}