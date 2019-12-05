import { ADD_ITEM, DELETE_ITEM, GET_ITEMS_ALL_DATA } from '../constants';
const initialState = { items: [] };

export default function rootReducer(state=initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state);       
    } else if (action.type === DELETE_ITEM) {
        return Object.assign({}, state, {
            items: state.items.filter((item)=>item.id!==action.payload)
        });       
    } else if (action.type === GET_ITEMS_ALL_DATA) {
        return Object.assign({}, state, {
            items: action.payload
        });       
    }
    return state;
}