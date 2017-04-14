
export const CHANGE_SCREEN = "CHANGE_SCREEN";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

export function changeScreen(screen) {
    return {
        type: CHANGE_SCREEN,
        payload: screen
    }
} 