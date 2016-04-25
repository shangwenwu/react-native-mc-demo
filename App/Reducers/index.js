

import { createStore, combineReducers } from 'redux'
import HomeState from './homeData'
import FetchData from './fetchData'

let store = createStore(combineReducers({
        HomeState,
        FetchData
}));

module.exports =  store;


