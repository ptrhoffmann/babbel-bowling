import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './redux/store';

const store = configureStore();

const renderApp = (Component, store) => render(
    <AppContainer>
        <Provider store={store}>
            <Component />
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);

renderApp(App, store);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const nextApp = require('./components/App').default;

        renderApp(nextApp, store);
    });
}