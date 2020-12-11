import * as actionTypes from './actionTypes'

const initialState = {
    user: {},
    isUserLoggedIn: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USCCESS_LOG_IN:
            return {
                isUserLoggedIn: state.isUserLoggedIn = true,
                user: state.user = action.payload
            }
        case actionTypes.LOG_OUT:
            return {
                isUserLoggedIn: state.isUserLoggedIn = false,
                user: state.user = {}
            }
    }
    return state;
};

export default reducer;