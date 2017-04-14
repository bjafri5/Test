import {CHANGE_SCREEN, ADD_USER} from './Actions';

let initialState = {
    currentScreen: ADD_USER
}

export default function reducer(state= initialState, action) {
    switch (action.type) {
        case CHANGE_SCREEN: 
            return {currentScreen: action.payload};
        default:
            return state;
    }
}