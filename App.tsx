import React from 'react';
import App from './src/navigations/index';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}