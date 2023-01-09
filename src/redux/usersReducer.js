import { serverAPI } from '../api/api';
import {inverseObjectPropertyInArray} from '../utils/helpers/helpers';

const INVERSE_FOLLOW = 'usersReducer/INVERSE_FOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_USERS_TOTAL_COUNT = 'usersReducer/SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'usersReducer/TOGGLE_IS_LOADING';
const SET_IS_FOLLOWING_IN_PROGRESS = 'usersReducer/SET_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  followingInProgress: [],
  isLoading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVERSE_FOLLOW:
    return {
        ...state,
        users: inverseObjectPropertyInArray(state.users, 'id', action.userId, 'followed')
    }
    case SET_USERS:
      return { ...state, users: action.users}
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count}
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber}    
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.isLoading}   
    case SET_IS_FOLLOWING_IN_PROGRESS:
        return { 
          ...state, 
          followingInProgress: action.isFollowingInProgress ?
          [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id !== action.userId)
    }   
    default:
      return state;
  }
};

export const inverseIsFollow = (userId) => {
  return {
    type: INVERSE_FOLLOW,
    userId
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  };
};

export const setUsersTotalCount = (count) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    count
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber
  };
};

export const setIsLoading = (isLoading) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading
  };
};

export const setFollowingInProgress = (isFollowingInProgress, userId) => {
  return {
    type: SET_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress, 
    userId
  };
};

export const followUser = (userId) => {
  return async (dispatch) => {
      dispatch(setIsLoading(true));
      dispatch(setFollowingInProgress(true, userId));
      let response = await serverAPI.followUser(userId);
      if (response && response.resultCode === 0) {
        dispatch(inverseIsFollow(userId));
      }
      dispatch(setIsLoading(false));
      dispatch(setFollowingInProgress(false, userId));
  }
}  

export const unfollowUser = (userId) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
      dispatch(setFollowingInProgress(true, userId));
      let response = await serverAPI.unfollowUser(userId);
      if (response && response.resultCode === 0) {
        dispatch(inverseIsFollow(userId));
      }
      dispatch(setIsLoading(false));
      dispatch(setFollowingInProgress(false, userId));
  }
}  

export const requestUsers = (pageSize, currentPage) => {
    return async (dispatch) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setIsLoading(true));
      let response = await serverAPI.getUsers(pageSize, currentPage);
      dispatch(setUsers(response.items));
      dispatch(setUsersTotalCount(response.totalCount));
      dispatch(setIsLoading(false));
  }
}

export default usersReducer;