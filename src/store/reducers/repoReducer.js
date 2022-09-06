import {GET_REPOS, SET_LOADING} from "../actionTypes"


const initial_state = {
    repos: [],
    loading: false
}

const repoReducer = (state = initial_state, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_REPOS:
            return {...state, repos: payload}
        case SET_LOADING:
            return {...state, loading: payload}
        default:
            return state;
    }
}

export default repoReducer