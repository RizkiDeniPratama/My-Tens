import axios from "axios";
import {GET_REPOS, SET_LOADING} from '../actionTypes'

const url = "https://api.github.com/users/RizkiDeniPratama/repos?sort=updated"

export const getRepos = (payload) => {
    return {type: GET_REPOS, payload}
}

export const setLoading = (payload) => {
    return {type: SET_LOADING, payload}
}

export function getAllRepos() {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))

            const repos = await axios.get(`${url}`)

            // console.log("ini repos === ", repos.data );
            dispatch(getRepos(repos.data))
        }
        catch (error) {
            console.log("ini err get repos ", error);
        }
        finally {
           return dispatch(setLoading(false))
        }
    }
}