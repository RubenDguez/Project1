import React from "react";
import ReactDOM, { render } from "react-dom";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux';
import { Provider } from "react-redux";

import reducer from './store/reducer'

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}


const store = createStore(reducer);

const Root = () => (
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>
)
render(<Root />, document.getElementById('root'))
registerServiceWorker();