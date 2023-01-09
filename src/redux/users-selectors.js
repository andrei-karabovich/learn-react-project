import { createSelector } from 'reselect'

export const selectAllUsers = (state) => {
    return state.usersPage.users;
}

export const selectUsers = createSelector(selectAllUsers, (users) => {
    return users.filter((u) => {
        return u.name.length < 15;
    });
});

export const selectCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const selectPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const selectTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const selectIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const selectFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}