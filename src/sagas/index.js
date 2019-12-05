import { all, takeLatest, put, takeEvery } from 'redux-saga/effects';
import { GET_ITEMS_ALL, GET_ITEMS_ALL_DATA, ADD_ITEM, DELETE_ITEM } from '../constants';
import { getItemsAll, apiError, getItemsAllData } from '../actions';
import axios from 'axios';

function* fetchItems() {
    const url = 'http://localhost:3000/api/v1/todo-item';
    const items = yield axios.get(url).then((res) => res.data);
    yield put(getItemsAllData(items));    
}

function* sgAddItem(action) {
    const url = 'http://localhost:3000/api/v1/todo-item';
    const data = {
        ...action.payload
    };
    try {
        yield axios.post(url, data);        
    } catch (error) {
        yield put(apiError(error));        
    }
    yield put(getItemsAll());    
}

function* sgDeleteItem(action) {
    const url = 'http://localhost:3000/api/v1/todo-item/' + action.payload;
    try {
        yield axios.delete(url);        
    } catch (error) {
        yield put(apiError(error));        
    }
    yield put(getItemsAll());    
}

function* actionWatcher() {
    yield takeLatest(GET_ITEMS_ALL, fetchItems);   
    yield takeEvery(ADD_ITEM, sgAddItem);
    yield takeEvery(DELETE_ITEM, sgDeleteItem);
}

export function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}