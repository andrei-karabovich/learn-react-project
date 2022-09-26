import axios from 'axios';

const api = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'ba9b1dee-b3f7-496b-b2e2-9c9d07e8dd6a'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const serverAPI = {
    getUsers: (pageSize, currentPage) => {
        return api.get(`/users?count=${pageSize}&page=${currentPage}`).then((response) => {
            return response.data
        });
    },

    followUser: (userId) => {
        return api.post(`/follow/${userId}`).then((response) => {
            return response.data
        });
    },

    unfollowUser: (userId) => {
        return api.delete(`/follow/${userId}`).then((response) => {
            return response.data
        });
    }, 

    getProfile: (userId) => {
        return api.get(`/profile/${userId}`).then((response) => {
            return response.data
        });
    },

    checkAuth: () => {
        return api.get('/auth/me').then((response) => {
            return response.data
        }); 
    }
}