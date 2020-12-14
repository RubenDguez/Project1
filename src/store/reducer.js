import * as actionTypes from './actionTypes'

const initialState = {
    user: {},
    isUserLoggedIn: false,
    products: [
        {
            id: 0,
            name: 'Vulova Watch',
            price: 300,
            description: 'Nice Vulova Watch From the 1800s'
        }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ITEMS:
            return {
                ...state,
                products: state.products = action.payload
            }
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