import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import conversationsReducer from '../redux/conversationsReducer';
import navigationReducer from '../redux/navigationReducer';
import profileReducer from '../redux/profileReducer';
import usersReducer from '../redux/usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {appReducer} from './appReducer';


const reducers = combineReducers( {
    conversationsPage: conversationsReducer,
    profilePage: profileReducer,
    navigationBar: navigationReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;