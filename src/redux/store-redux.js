import { legacy_createStore as createStore, combineReducers } from 'redux';
import conversationsReducer from '../redux/conversationsReducer';
import navigationReducer from '../redux/navigationReducer';
import profileReducer from '../redux/profileReducer';
import usersReducer from '../redux/usersReducer';
import authReducer from './authReducer';


const reducers = combineReducers( {
    conversationsPage: conversationsReducer,
    profilePage: profileReducer,
    navigationBar: navigationReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(reducers);


export default store;