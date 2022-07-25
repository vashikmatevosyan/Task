export const SET_LIST_DATA = 'SET_LIST_DATA'

export function setListData(data) {
    return{
        type: SET_LIST_DATA,
        payload: {data}
    }
}

export const DELETE_USER_DATA = 'DELETE_USER_DATA'

export function deleteUserData(data) {
    return{
        type: DELETE_USER_DATA,
        payload: {data}
    }
}
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA'

export function updateUserData(data) {
    return{
        type: UPDATE_USER_DATA,
        payload: {data}
    }
}
