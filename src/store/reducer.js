import * as actionTypes from './actionTypes'

const initialState = {
    isUserLoggedIn: false,
    emailAddress: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USCCESS_LOG_IN:
            return {
                isUserLoggedIn: state.isUserLoggedIn = true,
                emailAddress: state.emailAddress = action.payload
            }
        case actionTypes.LOG_OUT:
            return {
                isUserLoggedIn: state.isUserLoggedIn = false,
                emailAddress: state.emailAddress = ''
            }
    }
    return state;
};

export default reducer;