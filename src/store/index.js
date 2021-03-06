import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import home from "./reducers/home"
import list from "./reducers/list"
import mine from "./reducers/mine"
import order from "./reducers/order"
import search from "./reducers/search"
import shopcar from "./reducers/shopcar"

const reducer = combineReducers({
    home,
    list,
    mine,
    order,
    search,
    shopcar
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;