import {DELETE_USER_DATA, SET_LIST_DATA, UPDATE_USER_DATA} from "../actions/user";

const initialState = {
    listData: [],
}

export default function reducer(state = initialState , action){
    switch (action.type){
        case SET_LIST_DATA: {
            return {
                ...state,
                listData: [...state.listData  , action.payload.data]
            }
        }
        case DELETE_USER_DATA: {
            return {
                ...state,
                listData: [...action.payload.data]
            }
        }
        case UPDATE_USER_DATA: {
            return {
                ...state,
                listData: [...action.payload.data]
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}