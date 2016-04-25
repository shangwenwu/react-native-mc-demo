
import Immutable from 'immutable'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../Config/actionType'


const initState = Immutable.List([{
    opacity:0,
    isRefreshing: false,
    loaded: 0,
    rowData: Array.from(new Array(1)).map(
            (val, i) => ({text: 'Initial row' + i, clicks: 0})),
}]);


function HomeData(state = initState, action){
    console.log('HomeData'+'::::::::::::::::::::');
    console.log(action.type);
    switch (action.type) {

        case ADD_TODO:
            var obj =  Object.assign(...state,action.data);
            return [obj]

        case REMOVE_TODO:
            console.warn('77777');
            return [...state];

        case UPDATE_TODO:
            var obj =  Object.assign(...state,action.data);
            return [obj]

        default:
            console.log('HomeData'+'::::::::::::::::::::');
            return [...state]
    }
}


module.exports =  HomeData