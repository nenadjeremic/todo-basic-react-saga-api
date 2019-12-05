import { ADD_ITEM, DELETE_ITEM, GET_ITEMS_ALL, GET_ITEMS_ALL_DATA, API_ERROR } from '../constants';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    };
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: id
    };
}

export function getItemsAll() {
    return {
        type: GET_ITEMS_ALL
    };
}

export function getItemsAllData(items) {
    return {
        type: GET_ITEMS_ALL_DATA,
        payload: items
    };
}

export function apiError(reason) {
    return {
        type: API_ERROR,
        payload: reason
    };
}
