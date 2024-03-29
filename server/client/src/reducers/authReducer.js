import { FETCH_USER } from '../actions/types';

export default function authReducers(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
            break;
        default:
            return state;
    }
}