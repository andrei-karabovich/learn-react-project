import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;