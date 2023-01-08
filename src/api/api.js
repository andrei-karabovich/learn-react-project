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

    updateProfile: (profile) => {
        return api.put('/profile', profile).then((response) => {
            return response.data
        });
    },

    checkAuth: () => {
        return api.get('/auth/me').then((response) => {
            return response.data
        }); 
    },

    getStatus: (userId) => {
        return api.get(`/profile/status/${userId}`).then((response) => {
            if (!response.data) {
                response.data = '';
            }
            return response.data;
        }); 
    },

    updateStatus: (statusString) => {
        const postBody = {status: statusString};
        return api.put('/profile/status', postBody).then((response) => {
            return response.data
        }); 
    },

    login: (postBody) => {
        return api.post('/auth/login', postBody).then((response) => {
            return response.data
        }); 
    },

    logout: () => {
        return api.delete('/auth/login').then((response) => {
            return response.data
        }); 
    },

    updatePhoto: (image) => {
        let formData = new FormData();
        formData.append('image', image); 
        return api.put('/profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then((response) => {
            return response.data
        }); 
    }
}